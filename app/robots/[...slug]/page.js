export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await res.json();

    return robots.map((robot) => ({
        slug: [robot.id.toString()] // Only using the ID for now
    }));
}

export default async function RobotsCatchAll({ params }) {
    const { slug } = params; // This will be an array
    const id = slug[0]; // Get the robot ID from the slug

    // Fetch robot data based on the ID
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    // Error handling for fetching the robot data
    if (!res.ok) {
        return <div>Error fetching robot data.</div>; // Handle errors gracefully
    }

    const robot = await res.json();

    return (
        <div>
            <h1>{robot.name}</h1>
            <p>Email: {robot.email}</p>
            <p>Phone: {robot.phone}</p>
            <p>Website: {robot.website}</p>
            <p>Slug: {slug.join('/')}</p> {/* Display the full slug path */}
        </div>
    );
}