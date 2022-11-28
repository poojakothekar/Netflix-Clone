import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../Button'
import { ButtonType } from '../Button'
import PlayLogo from '../../../static/images/play-button.svg'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    parameters: {
      backgrounds: {
        default: '#141414',
        values: [
          { name: 'dark', value: '#141414' },
          { name: 'light', value: '#fff' },
        ],
      },
    },
    docs: {
      description: {
        component: 'Primary and secondary styles for all buttons',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary',
  buttonType: ButtonType.Primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
  buttonType: ButtonType.Secondary,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Icon Btn',
  buttonType: ButtonType.Primary,
  Icon: <PlayLogo />,
}
