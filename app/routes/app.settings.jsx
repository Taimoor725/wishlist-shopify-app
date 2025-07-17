import { TitleBar } from '@shopify/app-bridge-react'
import { Page } from '@shopify/polaris'
import React from 'react'

function settings() {
  return (
    <Page>
      <TitleBar title='lets  do some new settings'/>
    <div>
      setting page
      </div>
    </Page>
  )
}

export default settings