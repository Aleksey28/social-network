import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={classes.content}>
      <img
        src="https://1.bp.blogspot.com/-m4Kh7YKtojo/Xom1Qfqh1dI/AAAAAAAAGbA/l6l3NT_pOBAbdmmUhvRqRptzeycSmHl4ACEwYBhgLKs0DAMBZVoBxUmBbbZsX2B-IEqLYD9G_8peDtCobuQGeXVvlJRjNNagHAwqBRd-j6gxWiDATYohFUlQ8-nnW6oGWbsLJ7iNkgu77lo-wqfk4MmawQqtohjhKIwj9TB5k7YZ59KaAyIMXl88QhuxTtM9Vxt8jJMPWr3cBP7CysrxwbkrQpBSJEpdk2Ui9t01O6Od3DKmcA1safs55GJbWEaYj8-4ZQGqttknmbM-OX8qru4g4LqV1oA20uTDievlJlzmled7X0VlM1TKtXRXDXpHeoDypsVGmlGyxn7up_6QtigK_uSFxUxes2tXKG7eE4-qZ-F9IxCH0Cn3eJUmzH2ptgJL_h1DnHq6bVMyE26mIWSueex2UtR0SzhwLEU7mkwo2nIpsB-h8DijWKAqZHKScGoLWQwNCsjUIHg_eCuOAoJQSiygxMZmJpYkFPHMp6WdatOzxSVjmaK_p9f43oNY1qwHPjgSebojaGnCSZVkt0AvNgWtChZEKvsZqjbPyoU30BGfUa-dMCOLE3OsdiDLUibKv2GYRwfqyYx_Kkwy6ybT-q6flgIkpj8zCWKBtk3TE66LzAVwEwQh-f-1OmrszR0GYVzyu0PyLKgUAkkwwvO-m9AU/s640/Grid%2BUltimate%2BEdition%2BPC%2BGame%2BFree%2BDownload%2BFull%2BVersion%2BCompressed%2B31.6GB%2B6.jpg"
        alt="машина"/>
      <div>
        ava+description
      </div>
      <MyPosts/>
    </main>
  );
};

export default Profile;
