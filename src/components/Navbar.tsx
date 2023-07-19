"use client";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <span className="text-white text-lg font-bold">
            Vote to Elvish bhai 🙏
          </span>
        </div>
        <div className="relative">
          <span
            className="text-white cursor-pointer"
            onClick={() => window.how_it_works.showModal()}
          >
            How it works?
          </span>
          <dialog id="how_it_works" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">How it works?</h3>
              <p className="py-4">
                This website is directly using JioCinema API which I reverse
                engineered from their app. So, you can vote to Elvish bhai ❤️ as
                many times as you want. Remember your 1 click = 50 votes!
              </p>
              <br></br>
              <p>
                If you are interested in source code check this idea snippet
                here
                <a
                  href="https://www.val.town/v/pranjaldotdev.sendBulkVote"
                  className="text-blue-500"
                  target="_blank"
                >
                  {" "}
                  Voting Script
                </a>
              </p>

              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
