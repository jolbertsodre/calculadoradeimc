"use client";

import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";

const contactSchema = z.object({
  email: z.email({ error: "O email inserido não é válido!" }),
  subject: z.string().min(1, { error: 'O campo "Assunto" é obrigatório!' }),
  message: z
    .string()
    .min(1)
    .max(512, { error: 'O campo "Mensagem" é obrigatório!' }),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const messageValue = watch("message") || "";

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      alert("Mensagem enviada com sucesso!");
      reset();
    } catch {
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <main className="flex-grow self-center max-w-264 w-full pl-2 pr-14">
      <section>
        <h1 className="font-bold text-4xl">Contato</h1>
        <hr className="mt-10 w-full border-0 h-[1px] bg-[length:5px_1px] bg-gradient-to-r from-transparent to-transparent via-blue-main/50" />
      </section>

      <section className="mt-10">
        <div>
          <h2 className="text-lg text-justify">
            Para dúvidas, sugestões, feedbacks ou reclamações, preencha o
            formulário abaixo e retornaremos asssim que possível por email.
          </h2>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-blue-main flex flex-col gap-6 items-center justify-center max-w-198 w-full rounded p-6"
          >
            <div className="w-full relative">
              <input
                {...register("email")}
                placeholder="Digite seu email"
                type="email"
                className={clsx(
                  "bg-white-main w-full rounded h-12 p-1 outline-2 focus:outline-blue-sec",
                  {
                    "outline-red-error": errors.email,
                    "outline-green-valid":
                      !errors.email?.message && watch(email),
                    "outline-transparent": !watch(email),
                  }
                )}
              />

              {errors.email && (
                <span className="text-sm text-red-error mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="w-full relative">
              <input
                {...register("subject")}
                placeholder="Digite o assunto do feedback"
                type="text"
                className={clsx(
                  "bg-white-main w-full rounded h-12 p-1 outline-2 focus:outline-blue-sec",
                  {
                    "outline-red-error": errors.email,
                    "outline-green-valid":
                      !errors.email?.message && watch(email),
                    "outline-transparent": !watch(email),
                  }
                )}
              />

              {errors.subject && (
                <span className="text-sm text-red-error mt-1">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className="w-full relative">
              <textarea
                {...register("message")}
                placeholder="Digite seu feedback aqui..."
                maxLength={512}
                rows={8}
                className={clsx(
                  "bg-white-main w-full rounded p-1 resize-none outline-2 focus:outline-blue-sec",
                  {
                    "outline-red-error": errors.email,
                    "outline-green-valid":
                      !errors.email?.message && watch(email),
                    "outline-transparent": !watch(email),
                  }
                )}
              />

              <div className="absolute right-1 -translate-y-6 text-xs text-blue-sec">
                {messageValue.length}/512
              </div>

              {errors.message && (
                <span className="text-sm text-red-error mt-1 block">
                  O campo "Mensagem" é obrigatório!
                </span>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-white-main text-blue-main h-10 max-w-20 w-full text-base font-semibold rounded hover:bg-darker-white-main cursor-pointer disabled:bg-white-main/50 disabled:cursor-not-allowed"
              disabled={!isValid}
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
