interface Props{
    title: string
}

function CustomTag({title}: Props){
    return <span className={`bg-red-600 relative after:absolute before:absolute px-5 py-3 text-3xl font-marvel
        after:border-t-transparent after:border-r-[30px] after:border-r-red-600 after:border-b-[52px] after:border-b-transparent after:top-0 after:left-[-30px]
        before:border-b-transparent before:border-l-[30px] before:border-l-red-600 before:border-t-[52px] before:border-t-transparent before:top-0 before:right-[-30px]
        `}>{title}</span>
}

export default CustomTag