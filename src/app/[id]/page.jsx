"use client";
import * as s from "@/styles/page.module.scss";
import axios from "axios";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myText from "@/components/ids";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const id = params.id;
  const included = myText.includes(id);

  const router = useRouter();

  const currId = included ? id : undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currId !== undefined) {
      const name = e.target[0].value;
      const email = e.target[1].value;

      try {
        const data = {
          niche: currId,
          fullName: name,
          email: email,
        };
        await axios
          .post(`https://tiktok-shop-backend.onrender.com/api/v1/emails`, data)
          .then((res) => res.data)
          .then(router.push(`/${id}/success`));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // add privacy policy and put online

  return included ? (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.branding}>
          <span className={s.logo}>BLANK.</span>
          <p>
            Be one of the first and get access to the exclusive early access.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="submit" value={"Join waitlist"} />
        </form>
        <span className={s.secure}>
          Fully secure &nbsp; <FontAwesomeIcon icon={faLock} />
        </span>
      </div>
    </div>
  ) : (
    <div className={s.container}>
      <div className={s.content}>
        <h1>404 not found</h1>
      </div>
    </div>
  );
}

export default Page;
