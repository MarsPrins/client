import * as s from "@/styles/page.module.scss";

const page = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <p>
          Successfully joined waitlist. <br />
          Keep an eye on your e-mail.
        </p>
      </div>
    </div>
  );
};

export default page;
