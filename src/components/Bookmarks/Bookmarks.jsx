import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types"
const Bookmarks = ({ bookmarks, readTime }) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center bg-slate-400 rounded-lg p-2 text-white">Total Reading Time : {readTime} Min</h1>
            <h1 className="text-2xl font-semibold text-center bg-slate-400 rounded-lg p-2 text-white my-4">Total Bookmarks :  {bookmarks.length}</h1>
            <div className="bg-slate-200 rounded-lg p-2 my-2 min-h-screen">

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number.isRequired
}
export default Bookmarks;