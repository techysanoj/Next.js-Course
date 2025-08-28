export const dynamicParams = false; // false - this tells that whatever route which is not in pre rendered list it will give 404 error

// for pre rendering pages which we are showing in the product section
export async function generateStaticParams() {
    return [{id: "1"}, {id: "2"}, {id: "3"}];
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{id: string}>;
}) {
    const {id} = await params;
    return (
        <h1>
            Product {id} details rendered at {new Date().toLocaleTimeString()}
        </h1>
    );
}