import { BaseComponentContext } from '@microsoft/sp-component-base';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Label, Stack } from 'office-ui-fabric-react';
import * as React from 'react';

export interface helloWorldProps {
  context: BaseComponentContext
}

export const HelloWorld = ({ context }: helloWorldProps): JSX.Element => {

  const [selectedUserId, setSelectUserId] = React.useState<string[]>([]);

  return (
    <Stack>
      <PeoplePicker
        context={context}
        defaultSelectedUsers={selectedUserId}
        titleText="People Picker"
        personSelectionLimit={3}
        showtooltip={true}
        required={true}

        onChange={(items) => {
          setSelectUserId(items.map(item => item.id));
        }}

        principalTypes={[PrincipalType.User]}
 />

      <Label>Selected ({selectedUserId.length})</Label>
      <ul>
        {selectedUserId.map(user => (
          <li key={user}>{user}</li>
        ))}
        
      </ul>
    </Stack>
  );

}