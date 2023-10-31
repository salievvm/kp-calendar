import store from "../../../store";

import App from "../../model/App";


import {
  CrmContact,
  CrmCandidate,
  CrmExperience,
  CrmRecommendation,
  CrmRelatives,
  CrmRequisite,
} from "../../model";

class FormService {
  constructor(api) {
    this.api = api;
    this.app = new App();
    this.obCrmRequisite = new CrmRequisite(api);
    this.obCrmContact = new CrmContact(api);
    this.obCrmCandidate = new CrmCandidate(api);
    this.obCrmRelatives = new CrmRelatives(api);
    this.obCrmExperience = new CrmExperience(api);
    this.obCrmRecommendation = new CrmRecommendation(api);
  }

  send = async () => {
    this.app.setLoading();
    const { form } = store.getState();

    console.log({ schema: form.schema });

    const personal = form.schema.personal.sections[0].items;
    const additional = form.schema.additional.sections[0].items;
    const carLicense = form.schema.carLicense.sections[0].items;
    const lawViolation = form.schema.lawViolation.sections[0].items;
    const main = form.schema.main.sections[0].items;
    const sourceRecognition = form.schema.sourceRecognition.sections[0].items;
    const documents = form.schema.documents.sections[0].items;
    const passport = form.schema.passport.sections[0].items;

    const relatives = form.schema.family.sections;
    const experience = form.schema.experience.sections;
    const recommendation = form.schema.recommendation.sections;

    const contactId = await this.obCrmContact.add({
      ...personal,
      ...passport,
      ...main,
    });

    const resCandidate = await this.obCrmCandidate.add({
      ...personal,
      ...additional,
      ...carLicense,
      ...lawViolation,
      ...main,
      ...sourceRecognition,
      ...documents,
    }, contactId);

    const candidateId = resCandidate.item.id;

    const resRelatives = await this.obCrmRelatives.add(relatives, candidateId);
    const resExperience = await this.obCrmExperience.add(experience, candidateId);
    const resRecommendation = await this.obCrmRecommendation.add(recommendation, candidateId);

    await this.obCrmCandidate.update(
      candidateId,
      {
        "ufCrm14Relatives": resRelatives,
        "ufCrm14Experience": resExperience,
        "ufCrm14Recommendations": resRecommendation,
      },
    );
    
    this.app.endLoading();
  }
}

export default FormService;