export default function Footer() {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; {new Date().getFullYear()} Ghulam Rabbani. All rights reserved.</p>
            </div>
        </footer>
    );
}