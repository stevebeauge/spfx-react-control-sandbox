import { BaseComponentContext } from '@microsoft/sp-component-base';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Stack } from 'office-ui-fabric-react';
import * as React from 'react';

export interface helloWorldProps {
  context: BaseComponentContext
}

export const HelloWorld = ({ context }: helloWorldProps): JSX.Element => {

  const [selectedUserId, setSelectUserId] = React.useState<string[]>([]);

  // const onChange = useCallback((items) => {
  //   setSelectUserId(items.map(item => item.id));
  // }, []);

  return (
    <Stack>
      <PeoplePicker
        context={context}
        defaultSelectedUsers={selectedUserId}
        titleText="People Picker"
        personSelectionLimit={3}
        groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
        showtooltip={true}
        required={true}
        disabled={true}
        onChange={(items) => {
          setSelectUserId(items.map(item => item.id));
        }}
        showHiddenInUI={false}
        principalTypes={[PrincipalType.User]}
        resolveDelay={1000} />

    </Stack>
  );

}