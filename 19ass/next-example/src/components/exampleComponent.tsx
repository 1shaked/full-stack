interface PropsInter {
    number: number;
    name?: string;
}

export default function NameOfComponent(props: PropsInter) {
    return (<div>
        <h3>
            the count is {props.number}
            , name is {props.name ?? 'default'}
        </h3>
    </div>);
}