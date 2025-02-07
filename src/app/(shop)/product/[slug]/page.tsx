
interface Props {
    params: {
        slug: string;
    }
}


export default function ({ params }: Props) {
    const { slug } = params;

    return (
        <div>
            <h1>Producct page</h1>
        </div>
    )
}
