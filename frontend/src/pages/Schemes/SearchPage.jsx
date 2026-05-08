import { useSearchParams } from "react-router-dom";
import api from "../../api.js";
import { useEffect, useState } from "react";

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [categories, setCategories] = useState([]);
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(false);

    const selectedCategory = searchParams.get("category") || "";
    const searchQuery = searchParams.get("q") || "";

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await api.get("/categories");
                setCategories(res.data);
            } catch (err) {
                console.err("Failed to fetch Categories", err);
            }
        };

        fetchCategories();
    }, []);

    
    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                setLoading(true);
                const res = await api.get("/schemes", {
                    params : selectedCategory
                        ? { category : selectedCategory}
                        : {}
                });
                setSchemes(res.data);
            } catch (err) {
                console.err(err);
                setSchemes([]);
            } finally {
                setLoading(false);
            }
        };
        fetchSchemes();
    }, [selectedCategory]);

    // Update URL safely
    const updateParams = (params) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            Object.entries(params).forEach(([key, value]) => {
                if (!value) newParams.delete(key);
                else newParams.set(key, value);
            });
                return newParams;
        });
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-[280px] bg-white border-r">
            <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Explore Categories</h3>

            <input
                type="text"
                placeholder="Search schemes..."
                value={searchQuery}
                onChange={(e) => updateParams({ q: e.target.value })}
                className="mb-4 px-3 py-2 w-full border rounded-md"
            />

            <div className="h-[1px] bg-gray-200 my-4"></div>

            <button
                onClick={() => updateParams({ category: null })}
                className={`block mb-2 font-semibold ${
                !selectedCategory ? "text-blue-600" : "text-gray-700"
                }`}
            >
                All Categories
            </button>

            {categories.map((cat) => (
                <button
                key={cat.id}
                onClick={() => updateParams({ category: cat.category })}
                className={`block mb-2 text-left ${
                    selectedCategory === cat.category
                    ? "font-bold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                >
                    {cat.category}
                </button>
            ))}
            </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
            <h2 className="text-xl font-bold mb-6">
                {selectedCategory || "All Schemes"}
            </h2>

            {loading && <p>Loading schemes...</p>}

            {!loading && schemes.length === 0 && (
                <p className="text-gray-500">No schemes found.</p>
            )}

            <div className="grid gap-6">
            {schemes.map((scheme) => (
                <div
                    key={scheme.id}
                    className="bg-white p-6 rounded-lg border hover:shadow-md"
                >
                <h3 className="text-lg font-semibold mb-1">
                    {scheme.scheme_name}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                    {scheme.state_or_ministry}
                </p>

                <p className="text-sm text-gray-700 line-clamp-3">
                    {scheme.description}
                </p>
                </div>
            ))}
            </div>
        </main>
        </div>
    );
};
