import React, { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addData } from "../redux/slice/surveyResult";

const validation = yup.object({
  firstName: yup
    .string()
    .min(3, "Nama Minimal 3 karakter")
    .required("Nama Harus Diisi"),
  age: yup.number().required("Umur Harus Diisi"),
  gender: yup
    .mixed()
    .oneOf(["Laki-Laki", "Perempuan"])
    .required("Jenis Kelamin Harus diisi"),
  smoker: yup.mixed().oneOf(["Ya", "Tidak"]),
  cigare: yup.array().notRequired(),
});
export default function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });
  const [data, setData] = useState("");
  const navigate = useNavigate();

  function toLocal(formData) {
    dispatch(addData(formData));
    Swal.fire({
      title: "Sucess Menambahkan Data!",
      icon: "success",
      draggable: true,
    }).then(() => {
      navigate("/Table");
    });
  }
  return (
    <form onSubmit={handleSubmit(toLocal)}>
      <div className="min-h-screen bg-orange-50 flex  flex-col  gap-7 items-center justify-center ">
        <div className="bg-white p-6 rounded-lg border-t-10 mt-20 border-orange-500 shadow-lg w-1/2">
          <h2 className="text-2xl font-bold mb-4  pb-2">
            Feedback Form: Survey Perokok
          </h2>
          <h3 className="text-xl font-semibold mb-4">Feedback</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum
            praesentium laudantium eaque magnam beatae.
          </p>
          <p className="mb-4">Terima kasih! 😊</p>
          <div>
            <h1 className="font-bold">
              hosea1422@gmail.com{" "}
              <span className="text-blue-500"> Ganti akun</span>
            </h1>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg  shadow-lg w-1/2">
          <Input
            type={"text"}
            {...register("firstName")}
            className="w-full border-b-1"
            label={"Siapa Nama Anda"}
          />
          {errors.firstName && (
            <div className="text-red-600">{errors.firstName.message}</div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg  shadow-lg w-1/2">
          <Input
            type={"text"}
            className="w-full border-b-1"
            {...register("age")}
            label="Berapa umur Anda"
          />
          {errors.age && (
            <div className="text-red-600">{errors.age.message}</div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg  shadow-lg w-1/2">
          <Input
            id="gender"
            type={"radio"}
            {...register("gender", { required: true })}
            value={["Laki-Laki", "Perempuan"]}
            label="Apa Jenis Kelamin Anda"
          />
          {errors.gender && (
            <div className="text-red-600">{errors.gender.message}</div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg  shadow-lg w-1/2">
          <Input
            {...register("smoker", { required: true })}
            id="smoker"
            type={"radio"}
            value={["Ya", "Tidak"]}
            label="Apa Kah Anda Merokok"
          />
          {errors.smoker && (
            <div className="text-red-600">{errors.smoker.message}</div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg  shadow-lg w-1/2">
          <Input
            id="cigare"
            type={"checkbox"}
            {...register("cigare", { required: true })}
            value={["Esse", "Gudang Garam", "Marlboro"]}
            label="Jenis Rokok Anda"
          />
          {errors.cigare && (
            <div className="text-red-600">{errors.cigare.message}</div>
          )}
        </div>

        <div className="  w-1/2  mb-20">
          <button
            type="submit"
            className="bg-orange-500 p-2 rounded-lg text-center text-white w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
