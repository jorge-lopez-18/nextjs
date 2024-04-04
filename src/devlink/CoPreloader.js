import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-54":{"id":"e-54","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701736848693}},"actionLists":{"a-16":{"id":"a-16","title":"loader animation","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"filters":[{"type":"blur","filterId":"c018","value":15,"unit":"px"}]}},{"id":"a-16-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"globalSwatchId":"","rValue":26,"bValue":26,"gValue":26,"aValue":1}}]},{"actionItems":[{"id":"a-16-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":1000,"easing":"","duration":500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"globalSwatchId":"","rValue":230,"bValue":110,"gValue":250,"aValue":1}},{"id":"a-16-n-4","actionTypeId":"STYLE_FILTER","config":{"delay":1000,"easing":"","duration":1000,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"filters":[{"type":"blur","filterId":"a86d","value":0,"unit":"px"}]}}]},{"actionItems":[{"id":"a-16-n-11","actionTypeId":"TRANSFORM_SCALE","config":{"delay":500,"easing":"ease","duration":0,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"xValue":1,"yValue":1,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-16-n-12","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":1500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"xValue":100,"yValue":100,"locked":true}},{"id":"a-16-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256766"},"value":0,"unit":""}},{"id":"a-16-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256764"},"value":0,"unit":""}},{"id":"a-16-n-14","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256764"},"globalSwatchId":"","rValue":0,"bValue":230,"gValue":69,"aValue":1}}]},{"actionItems":[{"id":"a-16-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"5065fff9-07ea-fcab-fa38-520012256764"},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701736863428}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoPreloader({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="preloader"
      data-w-id="5065fff9-07ea-fcab-fa38-520012256764"
      tag="div"
    >
      <_Builtin.Block className="div-block-15" tag="div">
        <_Builtin.Paragraph
          className="build-your-dreams"
          data-w-id="5065fff9-07ea-fcab-fa38-520012256766"
        >
          {"BUILD YOUR DREAMS"}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
