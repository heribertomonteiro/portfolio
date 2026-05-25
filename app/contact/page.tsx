"use client";

import { useMemo, useState } from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

import {motion} from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    desc: "+55 (84) 98870-4218"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "heribertoomonteiroo@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    desc: "Rua Antônio de Melo, 54 (Casa 2) - Santa Cruz/RN"
  }
]


export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const serviceLabel = useMemo(() => {
    switch (service) {
      case "service_web":
        return "Desenvolvimento Web (Full Stack)";
      case "service_embedded":
        return "Sistemas Embarcados (IoT/FPGA)";
      case "service_automation":
        return "Automações e integrações";
      case "service_chatbot":
        return "Chatbots e WhatsApp";
      default:
        return "";
    }
  }, [service]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          service: serviceLabel,
          message,
        }),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Falha ao enviar.");
      }

      setSubmitStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Erro desconhecido");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-10 text-center xl:text-left">
          <h2 className="h2">Contato</h2>
          <p className="mt-3 max-w-2xl text-white/70 leading-relaxed mx-auto xl:mx-0">
            Vamos conversar sobre seu projeto, ideia ou oportunidade. Envie uma mensagem com o que você precisa e eu retorno o quanto antes.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 sm:p-10 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">Vamos trabalhar juntos</h3>
                <p className="text-white/70 leading-relaxed">Preencha os campos abaixo e descreva rapidamente seu contexto.</p>
              </div>

              {submitStatus === "success" ? (
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                  Mensagem enviada com sucesso. Vou retornar em breve.
                </div>
              ) : null}
              {submitStatus === "error" ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-white/80">
                  Não foi possível enviar agora. {submitError}
                </div>
              ) : null}

              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Nome" />
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Sobrenome" />
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Telefone" />
              </div>

              {/* Select */}
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="service_web">Desenvolvimento Web (Full Stack)</SelectItem>
                    <SelectItem value="service_embedded">Sistemas Embarcados (IoT/FPGA)</SelectItem>
                    <SelectItem value="service_automation">Automações e integrações</SelectItem>
                    <SelectItem value="service_chatbot">Chatbots e WhatsApp</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Insira sua mensagem aqui..." className="min-h-[180px] resize-none" />

              {/* Submit button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>

          {/* Info */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">Informações</h3>
            <p className="mt-2 text-white/70 leading-relaxed">Canais diretos para falar comigo.</p>
            <ul className="mt-8 flex flex-col gap-7">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 text-accent flex items-center justify-center shrink-0">
                      <div className="text-2xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-wider text-white/60">{item.title}</p>
                      <p className="mt-1 text-lg leading-snug break-words">{item.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      </div>
    </motion.section>
  )
}