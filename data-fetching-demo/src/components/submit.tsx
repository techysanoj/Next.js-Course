"use client";

// we created a seperate client component for the button because we need to use the hook

import { useFormStatus } from "react-dom";

export const Submit = () => {
    const {pending} = useFormStatus();

    return (
        <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled = {pending}>
            Submit
        </button>
    )
}