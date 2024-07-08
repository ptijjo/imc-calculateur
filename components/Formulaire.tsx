'use client'
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Imc from "../lib/fonctionImc";

type Inputs = {
    taille: number
    poids: number
}

const Formulaire = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        const imc = Imc(data);
        console.log(imc);


    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-1.5 w-4/5 max-w-lg items-center relative z-10">
            <Input type="text" placeholder="Taille...(cm)" id="taille" autoComplete="false" className="rounded placeholder-red-400 pl-4" {...register("taille", { required: true, min: 60, max: 250 })} />
            {errors.taille && errors.taille.type === "required" && <span>Taille Obligatoire</span>}
            {errors.taille && errors.taille.type === "min" && <span>Vous êtes trop jeune pour faire ce genre de calcul</span>}
            {errors.taille && errors.taille.type === "required" && <span>Taille Obligatoire</span>}

            <Input type="text" placeholder="Poids...(Kg)" id="poids" autoComplete="false" className="rounded" {...register("poids", { required: true, min: 10, max: 250 })} />
            {errors.poids && errors.poids.type === "required" && <span>Poids obligatoire</span>}

            <Button type="submit" className="mt-2.5 bg-gradiant rounded-full w-3/4">Calculez</Button>
        </form>

    )
}

export default Formulaire;