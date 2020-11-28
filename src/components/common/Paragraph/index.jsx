export function Paragraph(props) {
    return (
        <p style={{ color: props.rojito ? 'red' : 'white' }}>{props.text}</p>
    )
}
