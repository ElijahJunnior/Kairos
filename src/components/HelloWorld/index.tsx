import './styles.scss';

type HelloWorldProps = {
    comentario?: string | undefined;
    children?: string | undefined;
}

export function HelloWorld(props: HelloWorldProps) {
    return (
        <>
            <h1> Hello World {props.children || ''} </h1>
            {props.comentario && <p> {props.comentario} </p> || <p> Sem Comentarios </p>}
        </>
    );
}