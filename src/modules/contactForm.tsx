import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
	name: string;
	email: string;
	message: string;
}

function ContactForm() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>();
	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col font-G-Bold w-1/2 m-auto"
		>
			<div>
				<Controller
					name="name"
					control={control}
					rules={{ required: 'Ce champ est requis' }}
					render={({ field }) => (
						<input
							type="text"
							placeholder="Nom"
							className="border-b border-white bg-transparent placeholder:text-white placeholder:text-2xl text-2xl text-white pb-2 focus:border-orange-500 focus:border-b-2 focus:outline-none w-full"
							{...field}
						/>
					)}
				/>
				<p className="text-red-500 mb-5">
					{errors.name && errors.name.message}
				</p>
			</div>

			<div>
				<Controller
					name="email"
					control={control}
					rules={{
						required: 'Ce champ est requis',
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
					}}
					render={({ field }) => (
						<input
							type="email"
							placeholder="Email"
							className="border-b border-white bg-transparent placeholder:text-white placeholder:text-2xl text-2xl text-white pb-2 focus:border-orange-500 focus:border-b-2 focus:outline-none w-full"
							{...field}
						/>
					)}
				/>
				<p className="text-red-500 mb-5">
					{errors.email && errors.email.message}
				</p>
			</div>

			<div>
				<Controller
					name="message"
					control={control}
					rules={{ required: 'Ce champ est requis' }}
					render={({ field }) => (
						<textarea
							placeholder="Message"
							rows={6}
							className="border-b border-white bg-transparent placeholder:text-white placeholder:text-2xl text-2xl text-white pb-2 focus:border-orange-500 focus:border-b-2 focus:outline-none resize-none w-full"
							{...field}
						/>
					)}
				/>
				<p className="text-red-500 mb-5">
					{errors.message && errors.message.message}
				</p>
			</div>

			<button
				type="submit"
				className="text-white hover:text-orange-500 font-G-Ultra text-6xl sm:text-8xl lg:text-9xl scale-y-50 text-left"
			>
				ENVOYER
			</button>
		</form>
	);
}

export default ContactForm;
