import store from "../../../store";

import App from "../../model/App";
import ContactApi from "../../api/Contact";

import { CrmCandidate, CrmExperience, CrmRelatives } from "../../model";

class FormService {
  constructor(api) {
    this.api = api;
    this.app = new App();
    this.obContactApi = new ContactApi(api);
    this.obCrmCandidate = new CrmCandidate(api);
    this.obCrmRelatives = new CrmRelatives(api);
    this.obCrmExperience = new CrmExperience(api);
  }

  send = async () => {
    const { form } = store.getState();

    console.log({ schema: form.schema });
    // console.log({ contact: this.obContactApi });
    // console.log({ candidate: this.obCandidateApi });

    const personal = form.schema.personal.sections[0].items;
    const additional = form.schema.additional.sections[0].items;
    const carLicense = form.schema.carLicense.sections[0].items;
    const lawViolation = form.schema.lawViolation.sections[0].items;
    const main = form.schema.main.sections[0].items;
    const sourceRecognition = form.schema.sourceRecognition.sections[0].items;

    const relatives = form.schema.family.sections;
    const experience = form.schema.experience.sections;

    const fields = await this.obCrmCandidate.getFields();
    const resCandidate = await this.obCrmCandidate.add({
      ...personal,
      ...additional,
      ...carLicense,
      ...lawViolation,
      ...main,
      ...sourceRecognition,
    });

    const candidateId = resCandidate.item.id;

    // const fieldsRelatives = await this.obCrmRelatives.getFields();
    // const resRelatives = await this.obCrmRelatives.add(relatives, candidateId);

    const fieldsExperience = await this.obCrmExperience.getFields();
    const resExperience = await this.obCrmExperience.add(experience, candidateId);

    const resUpdate = await this.obCrmCandidate.update(
      candidateId,
      {
        // "ufCrm14Relatives": resRelatives,
        "ufCrm14Experience": resExperience,
      },
    );

    // console.log({ fields, fieldsRelatives });
    // console.log({ resCandidate, resRelatives, resUpdate });

    console.log({ experience, fieldsExperience });
  }
}

export default FormService;