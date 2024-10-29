export default function DRoutes( {params,
}: {
    params: {droutId: string}
}) {
    return <h1>Dynamic Routes {params.droutId}</h1>
};