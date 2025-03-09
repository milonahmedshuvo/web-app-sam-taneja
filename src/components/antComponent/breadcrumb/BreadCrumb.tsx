import { Breadcrumb } from "antd"


const BreadCrumb = () => {
  return (
    <Breadcrumb
    separator=">"
    items={[
      {
        title: <p className="text-[#214B82] text-md font-bold ml-2">Home</p>,
      },
      {
        title: 'Products',
        // href: '',
      },
      {
        title: 'Application List',
        // href: '',
      },
      
    ]}
  />
  )
}

export default BreadCrumb