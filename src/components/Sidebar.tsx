import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../slice";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FiMail, FiMoon, FiSun } from "react-icons/fi";

const Sidebar = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className="profile-content">
      <img
        src="/onePiece.jpeg"
        alt="One Piece inspired compass artwork"
        className="profile-avatar mx-auto"
        height="128"
        width="128"
      />
      <p className="eyebrow mt-6">Data systems · cloud · code</p>
      <h3 className="profile-name my-3">
        Abhishek <span>Vats</span>
      </h3>
      <p className="profile-role">
        AWS Data Engineer building reliable pipelines, quality frameworks, and observability for data products.
      </p>
      <div className="profile-actions flex flex-wrap gap-2 my-5">
        <a className="profile-action text-sm font-semibold" href="https://bit.ly/abhishek_vats_cv" target="_blank" rel="noreferrer">
          View resume
        </a>
        <button className="profile-action text-sm" onClick={() => dispatch(toggleTheme())} aria-label="Toggle color theme">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
      <div className="profile-socials flex gap-4 my-5">
        <a className="social-link" href="https://github.com/abhishekvatsAV" aria-label="Github" target="_blank" rel="noreferrer"><AiFillGithub className="w-6 h-6" /></a>
        <a className="social-link" href="https://www.linkedin.com/in/abhishek-vats-av/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><AiFillLinkedin className="w-6 h-6" /></a>
        <a className="social-link" href="mailto:abhishek.vats.av3@gmail.com" aria-label="Email"><FiMail className="w-6 h-6" /></a>
      </div>
      <div className="profile-contact border-t border-[var(--line)] pt-5 mt-5 text-left">
        <p className="eyebrow mb-3">Currently shipping from</p>
        <div className="flex items-center gap-2 text-sm text-[var(--muted)]"><GoLocation /><span>Delhi, India · open to impact</span></div>
        <p className="text-xs text-[var(--muted)] mt-3 break-all">abhishek.vats.av3@gmail.com</p>
      </div>
      <div className="mt-8 rounded-2xl bg-[var(--accent-soft)] p-4 text-left">
        <p className="eyebrow">Logbook note</p>
        <p className="text-sm leading-6 text-[var(--muted)] mt-2">“The sea is vast. Good data makes the route visible.”</p>
      </div>
      {/* Keep the old navigation actions out of the profile: the content nav is the single source of truth. */}
      <a className="hidden"
        href="https://bit.ly/abhishek_vats_cv"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Sidebar;
