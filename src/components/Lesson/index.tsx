import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  avaibleAt: Date;
  type: "live" | "class";
}

export default function Lesson({ avaibleAt, slug, title, type }: LessonProps) {
  const isLessonAvaible = isPast(avaibleAt);
  const avaibleDateFormated = format(
    avaibleAt,
    "EEEE' • 'd ' de 'MMMM' • 'k'h'MM",
    {
      locale: ptBR,
    }
  );

  return (
    <>
      <a href="#">
        <span className="text-gray-300">{avaibleDateFormated}</span>

        <div className="rounded border border-gray-500 p-4 mt-2 ">
          <header className="flex items-center justify-between">
            {isLessonAvaible ? (
              <>
                <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                  <CheckCircle size={20} />
                  Conteúdo liberado
                </span>
              </>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span className="text-xs rounded px-2 py-[0.125rem] border border-green-300 font-bold">
              {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>

          <strong className="text-gray-200 mt-5 block">{title}</strong>
        </div>
      </a>
    </>
  );
}
