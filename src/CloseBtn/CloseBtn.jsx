import st from './CloseBtn.module.css';

const CloseBtn = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={st.btn}>
      x
    </button>
  );
};

export default CloseBtn;
