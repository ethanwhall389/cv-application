import Input from "./input"
import Panel from "./panel"

export default function EditPanel() {
    return (
        <>
            <Panel title='Edit'>

            <div>
                <h2>General Info</h2>
                <Input title='Name' placeholder='Enter your full name'/>
                <Input title='Email' placeholder='Enter your email address'/>
                <Input title='Phone' placeholder='Enter your phone number' type='tel'/>
            </div>

            </Panel>
            
        </>
    )
}