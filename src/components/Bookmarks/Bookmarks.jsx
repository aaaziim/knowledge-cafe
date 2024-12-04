import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center bg-slate-400 rounded-lg p-2 text-white">Total Read Time : {bookmarks.length} Min</h1>
            <h1 className="text-2xl font-semibold text-center bg-slate-400 rounded-lg p-2 text-white my-4">Total Bookmarks : {bookmarks.length}</h1>
            <div className="bg-slate-200 rounded-lg p-2 my-2 min-h-screen">

                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

export default Bookmarks;