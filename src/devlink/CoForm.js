import React from "react";
import * as _Builtin from "./_Builtin";

export function CoForm({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section-13"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className="container-38"
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Layout
          className="quick-stack-9"
          id="w-node-faa6a8a0-f397-0c9f-7866-e80f4f5793a4-4f5793a2"
        >
          <_Builtin.Cell
            className="cell-10"
            id="w-node-faa6a8a0-f397-0c9f-7866-e80f4f5793a5-4f5793a2"
          >
            <_Builtin.Block className="div-block-2" tag="div">
              <_Builtin.FormWrapper className="form-block">
                <_Builtin.FormForm
                  className="form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  id="email-form"
                >
                  <_Builtin.Block className="div-block-3" tag="div">
                    <_Builtin.Layout
                      className="quick-stack-8"
                      id="w-node-faa6a8a0-f397-0c9f-7866-e80f4f5793aa-4f5793a2"
                    >
                      <_Builtin.Cell
                        className="cell-13"
                        id="w-node-faa6a8a0-f397-0c9f-7866-e80f4f5793ab-4f5793a2"
                      >
                        <_Builtin.Block className="div-block-4" tag="div">
                          <_Builtin.FormBlockLabel
                            className="field-label-2"
                            htmlFor="name-2"
                          >
                            {"Name"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className="form-input-contact"
                            autoFocus={false}
                            maxLength={256}
                            name="name-2"
                            data-name="Name 2"
                            placeholder="John Doe"
                            type="text"
                            disabled={false}
                            required={false}
                            id="name-2"
                          />
                        </_Builtin.Block>
                      </_Builtin.Cell>
                      <_Builtin.Cell
                        className="cell-12"
                        id="w-node-faa6a8a0-f397-0c9f-7866-e80f4f5793b0-4f5793a2"
                      >
                        <_Builtin.Block className="div-block-5" tag="div">
                          <_Builtin.FormBlockLabel
                            className="field-label-2"
                            htmlFor="email-2"
                          >
                            {"Email Address"}
                          </_Builtin.FormBlockLabel>
                          <_Builtin.FormTextInput
                            className="form-input-contact"
                            autoFocus={false}
                            maxLength={256}
                            name="email-2"
                            data-name="Email 2"
                            placeholder="example@yourcompany.com"
                            type="email"
                            disabled={false}
                            required={true}
                            id="email-2"
                          />
                        </_Builtin.Block>
                      </_Builtin.Cell>
                    </_Builtin.Layout>
                  </_Builtin.Block>
                  <_Builtin.FormBlockLabel
                    className="field-label-2"
                    htmlFor="field-2"
                  >
                    {"I’m interested in..."}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.List tag="ul" unstyled={true}>
                    <_Builtin.ListItem className="pill-contact">
                      {"Web Development"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="pill-contact">
                      {"App Development"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="pill-contact">
                      {"UX/UI Design"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="pill-contact">
                      {"Branding"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="pill-contact">
                      {"IT Support"}
                    </_Builtin.ListItem>
                    <_Builtin.ListItem className="pill-contact">
                      {"Other"}
                    </_Builtin.ListItem>
                  </_Builtin.List>
                  <_Builtin.FormBlockLabel
                    className="field-label-2"
                    htmlFor="field-2"
                  >
                    {"Tell us more about your project"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextarea
                    className="form-input-contact"
                    required={false}
                    autoFocus={false}
                    placeholder="My idea is..."
                    maxLength={5000}
                    name="field-2"
                    data-name="Field 2"
                    id="field-2"
                  />
                  <_Builtin.FormButton
                    className="card-button"
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage>
                  <_Builtin.Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
          </_Builtin.Cell>
          <_Builtin.Cell
            className="cell-11"
            id="w-node-faa6a8a0-f397-0c9f-7866-e80f4f5793ce-4f5793a2"
          >
            <_Builtin.MapWidget
              className="map"
              zoom={12}
              mapStyle="roadmap"
              enableScroll={true}
              enableTouch={true}
              apiKey={process.env.DEVLINK_ENV_GOOGLE_MAPS_API_KEY}
            />
          </_Builtin.Cell>
        </_Builtin.Layout>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
