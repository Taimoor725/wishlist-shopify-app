import { Button, Card, FormLayout, Layout, Page, TextField } from "@shopify/polaris"
import "../styles/form.css"
import { useState } from "react"
import { Form, useActionData } from "@remix-run/react"
import { json } from "@remix-run/node"



export async function action({request}) {
      let data=await request.formData()
      data= Object.fromEntries(data)
      console.log(data)
      return json(data)
  }

function FormPage() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    adress: ""
  })
  const data=useActionData()
  return (
    <Page title="Form Page Lets Check Somthing New">
      <Layout>
        <Card>
          <Form method="POST">
            <div className="form-outer">
              <FormLayout>
                <TextField value={formData.name} onChange={(value) => setForm({ ...formData, name: value })} name="name" type="text" label="Enter Your Name" />
                <TextField name="email" type="email" label="Enter Your Email" value={formData.email} onChange={(value)=>setForm({...formData,email:value})}/>
                <TextField name="phone" type="tel" label="Phone No." value={formData.phone} onChange={(value)=>setForm({...formData,phone:value})}/>
                <TextField value={formData.adress} onChange={(value) => setForm({ ...formData, adress: value })} name="adress" type="text" label="Address" />
                  <div className="btn-format">
                    <div className="btn">
                    <Button submit primary>
                        Submit
                    </Button>
                    </div>
                  </div>
              </FormLayout>
            </div>
          </Form>
        </Card>
        {data && (
          <div>
          <Card>{data.name}</Card>
          <Card>{data.email}</Card>
          </div>
        )
        }
      </Layout>
    </Page>
  )
}

export default FormPage