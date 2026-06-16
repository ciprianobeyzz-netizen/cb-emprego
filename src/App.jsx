import { useState } from "react";

const C = {
  red: "#CC0000", redDark: "#A00000",
  black: "#111111", white: "#FFFFFF",
  gray: "#F5F5F5", grayMid: "#E0E0E0", grayText: "#888888",
  gold: "#D4A017", green: "#1A8C4E", blue: "#1565C0", navy: "#0D1B3E",
};

const CANDIDATO = {
  nome: "Cipriano Armando Manuel Baião",
  cargo: "Operador de Empilhadeira · Marmorista",
  email: "ciprianobeyzz@gmail.com",
  whatsapp1: "+244 923 285 298",
  whatsapp2: "+244 956 723 968",
  local: "Caop-C, Viana, Luanda",
  origem: "Malanje, Angola",
  nascimento: "23/07/1997",
  perfil: "Profissional dedicado, responsável e com forte espírito de equipa.",
  experiencia: [
    { empresa: "Weza Rochas", cargo: "Marmorista", periodo: "2 anos e 3 meses", cor: "#1A8C4E" },
    { empresa: "SJ Pedras", cargo: "Operador de Empilhadeira", periodo: "8 meses", cor: "#1565C0" },
    { empresa: "Ango-Sónia", cargo: "Operador de Linha", periodo: "1 ano e 6 meses", cor: "#E65100" },
  ],
  competencias: ["Marmoraria","Empilhadeira","Trabalho em Equipa","Responsabilidade","Pontualidade","Organização"],
};const VAGAS = [
const VAGAS = [
  { id:1, titulo:"Operador de Empilhadeira", empresa:"Refriango", email:"rh@refriango.co.ao", local:"Viana — Pólo Industrial", tipo:"Tempo Inteiro", salario:"130.000 Kz", logo:"R", cor:"#1565C0", nova:true, desc:"Operador de empilhadeira para movimentação de carga em armazém de bebidas. Mínimo 1 ano de experiência." },
  { id:2, titulo:"Marmorista / Canteiro", empresa:"Griner Angola", email:"rh@griner.co.ao", local:"Viana — ZEE", tipo:"Tempo Inteiro", salario:"120.000 Kz", logo:"G", cor:"#1A8C4E", nova:true, desc:"Marmorista experiente para obras de construção civil e reabilitação de edifícios." },
  { id:3, titulo:"Operador de Produção", empresa:"Inovia Electrodomésticos", email:"rh@inovia.co.ao", local:"Viana — ZEE", tipo:"Tempo Inteiro", salario:"110.000 Kz", logo:"I", cor:"#6A1B9A", nova:true, desc:"Operador de linha de produção. Formação incluída." },
  { id:4, titulo:"Operador de Armazém", empresa:"Casais Angola", email:"rh@casais.co.ao", local:"Viana — ZEE", tipo:"Contrato", salario:"100.000 Kz", logo:"C", cor:"#E65100", nova:false, desc:"Apoio logístico em grande empresa de construção com 2.400 colaboradores." },
  { id:5, titulo:"Operador de Empilhadeira", empresa:"Nexime Technologies", email:"rh@nexime.co.ao", local:"Viana — ZEE", tipo:"Tempo Inteiro", salario:"140.000 Kz", logo:"N", cor:"#CC0000", nova:true, desc:"Empilhadeira para linha de montagem de telefones e tablets. Disponibilidade imediata." },
  { id:6, titulo:"Auxiliar de Produção", empresa:"Yoni Ben Angola", email:"rh@yoniben.co.ao", local:"Viana — ZEE", tipo:"Contrato", salario:"90.000 Kz", logo:"Y", cor:"#D4A017", nova:false, desc:"Fábrica de massas alimentares. Turnos. Sem experiência mínima exigida." },
  { id:7, titulo:"Operador de Máquinas", empresa:"Ninhoflex Colchões", email:"rh@ninhoflex.co.ao", local:"Viana — Pólo Industrial", tipo:"Tempo Inteiro", salario:"105.000 Kz", logo:"NH", cor:"#1565C0", nova:false, desc:"Máquinas industriais para fábrica de colchões. Experiência fabril valorizada." },
  { id:8, titulo:"Motorista / Operador Logístico", empresa:"Kaheel Agricultura", email:"rh@kaheel.co.ao", local:"Viana — ZEE", tipo:"Tempo Inteiro", salario:"120.000 Kz", logo:"K", cor:"#1A8C4E", nova:true, desc:"Fábrica de tratores e alfaias agrícolas. Carta de condução obrigatória." },
];

function Av({ l, cor, s=44 }) {
  return <div style={{width:s,height:s,borderRadius:s*0.28,background:cor,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:s*0.33,flexShrink:0}}>{l}</div>;
}
function Nav({ active, go }) {
  return (
    <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:C.white,borderTop:`1px solid ${C.grayMid}`,display:"flex",zIndex:200,paddingBottom:6}}>
      {[["vagas","💼","Vagas"],["candidaturas","📋","Candidaturas"],["perfil","👤","Perfil"]].map(([id,icon,lbl])=>(
        <button key={id} onClick={()=>go(id)} style={{flex:1,background:"none",border:"none",padding:"10px 0 4px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,color:active===id?C.red:C.grayText,fontFamily:"inherit"}}>
          <span style={{fontSize:20}}>{icon}</span>
          <span style={{fontSize:11,fontWeight:active===id?700:400}}>{lbl}</span>
          {active===id&&<div style={{width:20,height:2,background:C.red,borderRadius:2,marginTop:2}}/>}
        </button>
      ))}
    </div>
  );
    }export default function App() {
  const [screen, setScreen] = useState("login");
  const [sel, setSel] = useState(null);
  const [cands, setCands] = useState([]);

  function go(s) { setScreen(s); }
function candidatar(vaga) {
  if (cands.find(c=>c.id===vaga.id)) return;
  const hoje = new Date().toLocaleDateString("pt-PT",{day:"2-digit",month:"short",year:"numeric"});
  
  window.emailjs.send(
    "service_6kqr1mp",
    "template_270jadm",
    {
      to_empresa: vaga.empresa,
      vaga: vaga.titulo,
      email: vaga.email,
      name: "Cipriano Armando Manuel Baião",
    },
    "YMAG249m56LbLcVqK"
  );

  setCands(prev=>[{id:vaga.id,titulo:vaga.titulo,empresa:vaga.empresa,email:vaga.email,cor:vaga.cor,data:hoje,estado:"Em análise"},...prev]);
      }

  const main = ["vagas","candidaturas","perfil"];

  if (screen === "login") return (
    <div style={{minHeight:"100vh",background:C.white,display:"flex",flexDirection:"column"}}>
      <div style={{background:`linear-gradient(160deg,${C.red},${C.redDark})`,padding:"64px 24px 44px",textAlign:"center"}}>
        <div style={{width:72,height:72,background:"rgba(255,255,255,0.15)",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(255,255,255,0.3)",margin:"0 auto 16px"}}>
          <span style={{color:C.white,fontWeight:900,fontSize:28}}>CB</span>
        </div>
        <div style={{color:C.white,fontSize:28,fontWeight:800}}>CB Emprego Angola</div>
      </div>
      <div style={{padding:"32px 24px",display:"flex",flexDirection:"column",gap:14}}>
        <div style={{fontSize:22,fontWeight:800,color:C.black}}>Bem-vindo de volta</div>
        <button onClick={()=>go("vagas")} style={{padding:"15px",background:`linear-gradient(135deg,${C.red},${C.redDark})`,color:C.white,border:"none",borderRadius:12,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:"inherit",marginTop:8}}>Entrar →</button>
      </div>
    </div>
  );

  if (screen === "vagas") return (
    <div style={{minHeight:"100vh",background:C.gray,paddingBottom:80}}>
      <div style={{background:`linear-gradient(135deg,${C.navy},#1a2a4a)`,padding:"50px 20px 24px"}}>
        <div style={{color:"rgba(255,255,255,0.55)",fontSize:13}}>Olá, Cipriano 👋</div>
        <div style={{color:C.white,fontSize:21,fontWeight:800,marginTop:4,marginBottom:16}}>Encontra o teu emprego</div>
      </div>
      <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:10}}>
        {VAGAS.map(v=>(
          <div key={v.id} onClick={()=>{setSel(v);go("detalhe");}} style={{background:C.white,borderRadius:14,padding:16,cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,0.07)",border:`1px solid ${C.grayMid}`}}>
            <div style={{display:"flex",gap:12}}>
              <Av l={v.logo} cor={v.cor}/>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:15,color:C.black}}>{v.titulo}</div>
                <div style={{color:C.grayText,fontSize:13}}>{v.empresa} · {v.local}</div>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:12,paddingTop:12,borderTop:`1px solid ${C.grayMid}`}}>
              <div style={{fontWeight:800,color:C.red,fontSize:16}}>{v.salario}/mês</div>
              <span style={{fontSize:13,color:C.red,fontWeight:600}}>Ver →</span>
            </div>
          </div>
        ))}
      </div>
      <Nav active="vagas" go={go}/>
    </div>
  );

  if (screen === "detalhe" && sel) return (
    <div style={{minHeight:"100vh",background:C.gray,paddingBottom:90}}>
      <div style={{background:sel.cor,padding:"50px 20px 28px"}}>
        <button onClick={()=>go("vagas")} style={{background:"rgba(255,255,255,0.2)",border:"none",borderRadius:8,padding:"6px 14px",color:C.white,fontSize:13,cursor:"pointer",marginBottom:16,fontFamily:"inherit"}}>← Voltar</button>
        <div style={{color:C.white,fontSize:22,fontWeight:800}}>{sel.titulo}</div>
        <div style={{color:"rgba(255,255,255,0.85)",fontSize:15,marginTop:4}}>{sel.empresa}</div>
      </div>
      <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:12}}>
        <div style={{background:C.white,borderRadius:14,padding:16,boxShadow:"0 1px 6px rgba(0,0,0,0.07)"}}>
          <div style={{fontSize:24,fontWeight:800,color:C.red}}>{sel.salario}/mês</div>
          <div style={{color:C.grayText,fontSize:14,marginTop:8}}>{sel.desc}</div>
        </div>
        <div style={{background:C.white,borderRadius:14,padding:16,boxShadow:"0 1px 6px rgba(0,0,0,0.07)"}}>
          <div style={{fontWeight:700,marginBottom:8}}>📧 Contacto</div>
          <div style={{color:C.grayText,fontSize:14}}>{sel.email}</div>
        </div>
      </div>
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:C.white,padding:"14px 20px 20px",borderTop:`2px solid ${C.grayMid}`}}>
        <button onClick={()=>{candidatar(sel);go("sucesso");}} style={{width:"100%",padding:"17px",background:cands.some(c=>c.id===sel.id)?C.green:`linear-gradient(135deg,${C.red},${C.redDark})`,color:C.white,border:"none",borderRadius:12,fontSize:17,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>
          {cands.some(c=>c.id===sel.id)?"✓ Já te Candidataste":"✉️ Candidatar-me Agora"}
        </button>
      </div>
    </div>
  );

  if (screen === "sucesso") return (
    <div style={{minHeight:"100vh",background:C.white,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:32,textAlign:"center"}}>
      <div style={{fontSize:80,marginBottom:24}}>✅</div>
      <div style={{fontSize:24,fontWeight:800,color:C.black,marginBottom:10}}>Candidatura Enviada!</div>
      <div style={{color:C.grayText,fontSize:15,marginBottom:24}}>CV enviado para <b style={{color:C.black}}>{sel?.empresa}</b></div>
      <div style={{display:"flex",gap:10}}>
        <button onClick={()=>go("candidaturas")} style={{padding:"13px 20px",background:C.gray,color:C.black,border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>📋 Ver Estado</button>
        <button onClick={()=>go("vagas")} style={{padding:"13px 20px",background:`linear-gradient(135deg,${C.red},${C.redDark})`,color:C.white,border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Mais Vagas</button>
      </div>
    </div>
  );

  if (screen === "candidaturas") return (
    <div style={{minHeight:"100vh",background:C.gray,paddingBottom:80}}>
      <div style={{background:`linear-gradient(135deg,${C.navy},#1a2a4a)`,padding:"50px 20px 24px"}}>
        <div style={{color:C.white,fontSize:22,fontWeight:800}}>As Minhas Candidaturas</div>
      </div>
      <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:10}}>
        {cands.length===0?(
          <div style={{background:C.white,borderRadius:14,padding:32,textAlign:"center"}}>
            <div style={{fontSize:40,marginBottom:12}}>💼</div>
            <div style={{fontWeight:700,color:C.black,marginBottom:8}}>Ainda não te candidataste</div>
            <button onClick={()=>go("vagas")} style={{background:C.red,color:C.white,border:"none",borderRadius:10,padding:"12px 28px",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Ver Vagas</button>
          </div>
        ):cands.map((c,i)=>(
          <div key={i} style={{background:C.white,borderRadius:14,padding:16,borderLeft:`4px solid #D4A017`}}>
            <div style={{fontWeight:700,color:C.black}}>{c.titulo}</div>
            <div style={{color:C.grayText,fontSize:13,marginTop:2}}>{c.empresa}</div>
            <div style={{marginTop:8,display:"flex",justifyContent:"space-between"}}>
              <span style={{background:"#D4A01718",color:"#D4A017",fontWeight:700,fontSize:12,padding:"3px 9px",borderRadius:20}}>Em análise</span>
              <span style={{fontSize:12,color:C.grayText}}>{c.data}</span>
            </div>
          </div>
        ))}
      </div>
      <Nav active="candidaturas" go={go}/>
    </div>
  );

  if (screen === "perfil") return (
    <div style={{minHeight:"100vh",background:C.gray,paddingBottom:80}}>
      <div style={{background:`linear-gradient(135deg,${C.red},${C.redDark})`,padding:"50px 20px 64px",textAlign:"center"}}>
        <div style={{width:80,height:80,background:"rgba(255,255,255,0.2)",borderRadius:"50%",border:"3px solid rgba(255,255,255,0.5)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",fontSize:34,color:C.white,fontWeight:800}}>C</div>
        <div style={{color:C.white,fontSize:20,fontWeight:800}}>{CANDIDATO.nome}</div>
        <div style={{color:"rgba(255,255,255,0.8)",fontSize:13,marginTop:4}}>{CANDIDATO.cargo}</div>
      </div>
      <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:12}}>
        <div style={{background:C.white,borderRadius:14,padding:16}}>
          {[["📧","Email",CANDIDATO.email],["📱","WhatsApp 1",CANDIDATO.whatsapp1],["📱","WhatsApp 2",CANDIDATO.whatsapp2],["📍","Local",CANDIDATO.local]].map(([ic,lb,vl])=>(
            <div key={lb} style={{padding:"10px 0",borderBottom:`1px solid ${C.grayMid}`,display:"flex",gap:12}}>
              <span>{ic}</span>
              <div><div style={{fontSize:11,color:C.grayText}}>{lb}</div><div style={{fontSize:13,fontWeight:600,color:C.black}}>{vl}</div></div>
            </div>
          ))}
        </div>
        <div style={{background:C.white,borderRadius:14,padding:16}}>
          <div style={{fontWeight:700,marginBottom:12}}>💼 Experiência</div>
          {CANDIDATO.experiencia.map(e=>(
            <div key={e.empresa} style={{display:"flex",gap:12,marginBottom:12}}>
              <Av l={e.empresa[0]} cor={e.cor} s={40}/>
              <div><div style={{fontWeight:700,fontSize:14}}>{e.cargo}</div><div style={{color:C.grayText,fontSize:13}}>{e.empresa} · {e.periodo}</div></div>
            </div>
          ))}
        </div>
        <button onClick={()=>go("login")} style={{padding:"14px",background:C.white,color:C.red,border:`1.5px solid ${C.red}`,borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Sair</button>
      </div>
      <Nav active="perfil" go={go}/>
    </div>
  );

  return null;
                                                                                                                                                       }
