import{j as o}from"./jsx-runtime-fc9fa0e1.js";import{c as n,u as c,B as p}from"./index-66eef5b8.js";import"./index-a99a8bc6.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./v4-a960c1f4.js";const d=t=>{const{showToast:i}=c();return o.jsx(o.Fragment,{children:o.jsx(p,{onClick:()=>{i({title:"A Toast",description:"A description"})},children:"Add new Toast"})})},h={component:d,title:"Data display/Toast",tags:["autodocs"],args:{title:"A Toast",description:"A description"},argTypes:{},parameters:{docs:{source:{code:`
const Demo = (props:ToastProps) => {
  const {showToast} = useToast()
  return (
    <ToastProvider>
        <Button
          onClick={() => {
            showToast({
              title: 'A Toast',
              description: 'A description'
            })
          }}
        >
          Add new Toast
        </Button>
    </ToastProvider>
  )
}
        `}}},decorators:[t=>o.jsx(n,{children:o.jsx(t,{})})]},s={};var r,e,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(a=(e=s.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const j=["Primary"];export{s as Primary,j as __namedExportsOrder,h as default};
//# sourceMappingURL=Toast.stories-41eb2eb7.js.map
