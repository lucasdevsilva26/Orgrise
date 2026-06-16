import Header from "../components/header/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import LoginSignonInput from "../components/header/LoginSignonInput";
import { useNavigate } from "react-router";

import { Global } from "../main";
import { useState } from "react";

function Signon() {
  const presets = {
    title: `font-bold text-4xl ${Global.colors.title} sm:text-6xl`,
    parag: "pl-3",
    bgButton: `cursor-pointer w-100 px-4 h-max py-2 bg-linear-to-r ${Global.colors.buttonBg} rounded-4xl font-bold text-white text-3xl`,
    scaleChange: ` duration-350 hover:scale-95 `,
  };
  const navigate = useNavigate();

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [
      {
        email: "orgrise@gmail.com",
        password: "12345678",
        storage: [
          {
            id: "a1f7c9e2",
            icon: "bread-slice",
            color: "#F5DEB3",
            Name: "Pão Francês",
            Price: 0.75,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "b2e8d3f1",
            icon: "bottle-water",
            color: "#4FC3F7",
            Name: "Água Mineral 500ml",
            Price: 2.5,
            Amount: 500,
            AmountType: "Ml",
          },
          {
            id: "c3d9a4b7",
            icon: "jar",
            color: "#FFD54F",
            Name: "Mel 500g",
            Price: 18.9,
            Amount: 500,
            AmountType: "Kg",
          },
          {
            id: "d4a7e8c2",
            icon: "bowl-rice",
            color: "#FFF8DC",
            Name: "Arroz Branco",
            Price: 5.99,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "e5c2f9d4",
            icon: "cheese",
            color: "#FFF176",
            Name: "Queijo Mussarela",
            Price: 42.9,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "f6b8a1e3",
            icon: "bacon",
            color: "#D32F2F",
            Name: "Bacon Defumado",
            Price: 38.5,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "g7d3c5f8",
            icon: "egg",
            color: "#FFF9C4",
            Name: "Ovos Brancos",
            Price: 12.99,
            Amount: 12,
            AmountType: "Un.",
          },
          {
            id: "h8e4b7a9",
            icon: "carrot",
            color: "#FF9800",
            Name: "Cenoura",
            Price: 4.49,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "i9f5d8c1",
            icon: "apple-whole",
            color: "#E53935",
            Name: "Maçã Gala",
            Price: 8.99,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "j1a6e9b2",
            icon: "lemon",
            color: "#FFEB3B",
            Name: "Limão Tahiti",
            Price: 5.49,
            Amount: 1,
            AmountType: "Kg",
          },

          {
            id: "k2b7f1c3",
            icon: "fish",
            color: "#90CAF9",
            Name: "Tilápia",
            Price: 29.9,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "l3c8a2d4",
            icon: "shrimp",
            color: "#FF8A65",
            Name: "Camarão Médio",
            Price: 49.9,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "m4d9b3e5",
            icon: "drumstick-bite",
            color: "#A1887F",
            Name: "Coxa de Frango",
            Price: 13.99,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "n5e1c4f6",
            icon: "pizza-slice",
            color: "#FF7043",
            Name: "Pizza Calabresa",
            Price: 39.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "o6f2d5a7",
            icon: "burger",
            color: "#8D6E63",
            Name: "Hambúrguer Bovino",
            Price: 3.99,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "p7a3e6b8",
            icon: "hotdog",
            color: "#F06292",
            Name: "Salsicha Hot Dog",
            Price: 14.5,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "q8b4f7c9",
            icon: "cookie",
            color: "#A1887F",
            Name: "Biscoito Recheado",
            Price: 3.49,
            Amount: 140,
            AmountType: "G",
          },
          {
            id: "r9c5a8d1",
            icon: "cookie-bite",
            color: "#8D6E63",
            Name: "Cookie Chocolate",
            Price: 5.99,
            Amount: 100,
            AmountType: "G",
          },
          {
            id: "s1d6b9e2",
            icon: "ice-cream",
            color: "#E1BEE7",
            Name: "Sorvete Creme",
            Price: 19.9,
            Amount: 2,
            AmountType: "L",
          },
          {
            id: "t2e7c1f3",
            icon: "cake-candles",
            color: "#F8BBD0",
            Name: "Bolo de Chocolate",
            Price: 29.9,
            Amount: 1,
            AmountType: "Kg",
          },

          {
            id: "u3f8d2a4",
            icon: "mug-hot",
            color: "#6D4C41",
            Name: "Café Torrado",
            Price: 22.9,
            Amount: 500,
            AmountType: "G",
          },
          {
            id: "v4a9e3b5",
            icon: "glass-water",
            color: "#81D4FA",
            Name: "Refrigerante Cola",
            Price: 8.49,
            Amount: 2,
            AmountType: "L",
          },
          {
            id: "w5b1f4c6",
            icon: "wine-bottle",
            color: "#7B1FA2",
            Name: "Suco de Uva Integral",
            Price: 14.9,
            Amount: 1,
            AmountType: "L",
          },
          {
            id: "x6c2a5d7",
            icon: "bottle-droplet",
            color: "#FBC02D",
            Name: "Óleo de Soja",
            Price: 7.99,
            Amount: 900,
            AmountType: "Ml",
          },
          {
            id: "y7d3b6e8",
            icon: "cubes-stacked",
            color: "#FFFFFF",
            Name: "Açúcar Refinado",
            Price: 4.99,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "z8e4c7f9",
            icon: "plate-wheat",
            color: "#D7CCC8",
            Name: "Farinha de Trigo",
            Price: 5.49,
            Amount: 1,
            AmountType: "Kg",
          },
          {
            id: "aa9f5d8b",
            icon: "jar-wheat",
            color: "#FFE082",
            Name: "Aveia em Flocos",
            Price: 8.99,
            Amount: 500,
            AmountType: "G",
          },
          {
            id: "ab1a6e9c",
            icon: "pepper-hot",
            color: "#D50000",
            Name: "Pimenta Malagueta",
            Price: 3.99,
            Amount: 100,
            AmountType: "G",
          },
          {
            id: "ac2b7f1d",
            icon: "seedling",
            color: "#4CAF50",
            Name: "Alface Crespa",
            Price: 2.99,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "ad3c8a2e",
            icon: "leaf",
            color: "#388E3C",
            Name: "Couve",
            Price: 2.49,
            Amount: 1,
            AmountType: "Un.",
          },

          {
            id: "ae4d9b3f",
            icon: "truck",
            color: "#607D8B",
            Name: "Carrinho de Mão",
            Price: 189.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "af5e1c4a",
            icon: "hammer",
            color: "#795548",
            Name: "Martelo 27mm",
            Price: 34.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "ag6f2d5b",
            icon: "screwdriver",
            color: "#9E9E9E",
            Name: "Chave de Fenda",
            Price: 12.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "ah7a3e6c",
            icon: "wrench",
            color: "#607D8B",
            Name: "Chave Inglesa",
            Price: 29.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "ai8b4f7d",
            icon: "paint-roller",
            color: "#03A9F4",
            Name: "Rolo de Pintura",
            Price: 18.5,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "aj9c5a8e",
            icon: "brush",
            color: "#8BC34A",
            Name: "Pincel 2 Polegadas",
            Price: 9.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "ak1d6b9f",
            icon: "toolbox",
            color: "#F44336",
            Name: "Caixa de Ferramentas",
            Price: 89.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "al2e7c1a",
            icon: "gear",
            color: "#9E9E9E",
            Name: "Engrenagem Industrial",
            Price: 59.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "am3f8d2b",
            icon: "chair",
            color: "#8D6E63",
            Name: "Cadeira Plástica",
            Price: 49.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "an4a9e3c",
            icon: "fan",
            color: "#90A4AE",
            Name: "Ventilador 40cm",
            Price: 149.9,
            Amount: 1,
            AmountType: "Un.",
          },

          {
            id: "ao5b1f4d",
            icon: "toilet-paper",
            color: "#FAFAFA",
            Name: "Papel Higiênico 12 Rolos",
            Price: 17.9,
            Amount: 12,
            AmountType: "Un.",
          },
          {
            id: "ap6c2a5e",
            icon: "jug-detergent",
            color: "#4DD0E1",
            Name: "Detergente Líquido",
            Price: 2.99,
            Amount: 500,
            AmountType: "Ml",
          },
          {
            id: "aq7d3b6f",
            icon: "droplet",
            color: "#2196F3",
            Name: "Água Sanitária",
            Price: 4.5,
            Amount: 1,
            AmountType: "L",
          },
          {
            id: "ar8e4c7a",
            icon: "flask-vial",
            color: "#7E57C2",
            Name: "Álcool 70%",
            Price: 8.99,
            Amount: 1,
            AmountType: "L",
          },
          {
            id: "as9f5d8b",
            icon: "capsules",
            color: "#FF7043",
            Name: "Vitamina C",
            Price: 19.9,
            Amount: 30,
            AmountType: "Un.",
          },
          {
            id: "at1a6e9c",
            icon: "tablets",
            color: "#42A5F5",
            Name: "Paracetamol",
            Price: 6.99,
            Amount: 20,
            AmountType: "Un.",
          },
          {
            id: "au2b7f1d",
            icon: "school",
            color: "#5C6BC0",
            Name: "Caderno Universitário",
            Price: 18.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "av3c8a2e",
            icon: "calculator",
            color: "#37474F",
            Name: "Calculadora Científica",
            Price: 49.9,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "aw4d9b3f",
            icon: "ruler",
            color: "#FFB300",
            Name: "Régua 30cm",
            Price: 3.99,
            Amount: 1,
            AmountType: "Un.",
          },
          {
            id: "ax5e1c4a",
            icon: "scissors",
            color: "#607D8B",
            Name: "Tesoura Escolar",
            Price: 7.9,
            Amount: 1,
            AmountType: "Un.",
          },
        ],
        customers: [
      {
        name: "Lucas Almeida",
        tel: "82998123451",
        email: "lucas.almeida01@gmail.com",
        city: "Arapiraca",
        status: true,
        lastBuy: "12/01/26",
        totalBuy: 1540,
      },
      {
        name: "Mariana Souza",
        tel: "11987456321",
        email: "mariana.souza02@gmail.com",
        city: "São Paulo",
        status: true,
        lastBuy: "03/02/26",
        totalBuy: 820,
      },
      {
        name: "João Ferreira",
        tel: "71991234567",
        email: "joao.ferreira03@gmail.com",
        city: "Salvador",
        status: true,
        lastBuy: "25/03/26",
        totalBuy: 2370,
      },
      {
        name: "Ana Beatriz Lima",
        tel: "31987654321",
        email: "ana.lima04@gmail.com",
        city: "Belo Horizonte",
        status: true,
        lastBuy: "14/04/26",
        totalBuy: 690,
      },
      {
        name: "Carlos Henrique",
        tel: "85991112233",
        email: "carlos.henrique05@gmail.com",
        city: "Fortaleza",
        status: true,
        lastBuy: "28/05/26",
        totalBuy: 3120,
      },
      {
        name: "Fernanda Rocha",
        tel: "41992345678",
        email: "fernanda.rocha06@gmail.com",
        city: "Curitiba",
        status: true,
        lastBuy: "11/06/26",
        totalBuy: 940,
      },
      {
        name: "Pedro Martins",
        tel: "27993456789",
        email: "pedro.martins07@gmail.com",
        city: "Vitória",
        status: true,
        lastBuy: "18/02/26",
        totalBuy: 1750,
      },
      {
        name: "Juliana Costa",
        tel: "61994567890",
        email: "juliana.costa08@gmail.com",
        city: "Brasília",
        status: true,
        lastBuy: "22/01/26",
        totalBuy: 460,
      },
      {
        name: "Gabriel Oliveira",
        tel: "51995678901",
        email: "gabriel.oliveira09@gmail.com",
        city: "Porto Alegre",
        status: true,
        lastBuy: "07/05/26",
        totalBuy: 2840,
      },
      {
        name: "Patrícia Gomes",
        tel: "71996789012",
        email: "patricia.gomes10@gmail.com",
        city: "Feira de Santana",
        status: true,
        lastBuy: "16/03/26",
        totalBuy: 1130,
      },
      {
        name: "Rafael Barbosa",
        tel: "82997890123",
        email: "rafael.barbosa11@gmail.com",
        city: "Maceió",
        status: true,
        lastBuy: "01/06/26",
        totalBuy: 3980,
      },
      {
        name: "Camila Mendes",
        tel: "48998901234",
        email: "camila.mendes12@gmail.com",
        city: "Florianópolis",
        status: true,
        lastBuy: "09/04/26",
        totalBuy: 760,
      },
      {
        name: "Thiago Santos",
        tel: "62999012345",
        email: "thiago.santos13@gmail.com",
        city: "Goiânia",
        status: true,
        lastBuy: "20/02/26",
        totalBuy: 2190,
      },
      {
        name: "Larissa Ribeiro",
        tel: "98990123456",
        email: "larissa.ribeiro14@gmail.com",
        city: "São Luís",
        status: true,
        lastBuy: "13/05/26",
        totalBuy: 880,
      },
      {
        name: "Bruno Carvalho",
        tel: "83991234567",
        email: "bruno.carvalho15@gmail.com",
        city: "João Pessoa",
        status: true,
        lastBuy: "26/01/26",
        totalBuy: 1460,
      },
      {
        name: "Aline Rodrigues",
        tel: "86992345678",
        email: "aline.rodrigues16@gmail.com",
        city: "Teresina",
        status: true,
        lastBuy: "17/03/26",
        totalBuy: 530,
      },
      {
        name: "Diego Nunes",
        tel: "67993456789",
        email: "diego.nunes17@gmail.com",
        city: "Campo Grande",
        status: true,
        lastBuy: "05/06/26",
        totalBuy: 3270,
      },
      {
        name: "Vanessa Lopes",
        tel: "91994567890",
        email: "vanessa.lopes18@gmail.com",
        city: "Belém",
        status: true,
        lastBuy: "29/04/26",
        totalBuy: 1250,
      },
      {
        name: "Felipe Araújo",
        tel: "65995678901",
        email: "felipe.araujo19@gmail.com",
        city: "Cuiabá",
        status: true,
        lastBuy: "08/02/26",
        totalBuy: 2740,
      },
      {
        name: "Tatiane Silva",
        tel: "92996789012",
        email: "tatiane.silva20@gmail.com",
        city: "Manaus",
        status: true,
        lastBuy: "24/05/26",
        totalBuy: 910,
      },
      {
        name: "Ricardo Moreira",
        tel: "95997890123",
        email: "ricardo.moreira21@gmail.com",
        city: "Boa Vista",
        status: true,
        lastBuy: "15/01/26",
        totalBuy: 1880,
      },
      {
        name: "Amanda Freitas",
        tel: "68998901234",
        email: "amanda.freitas22@gmail.com",
        city: "Rio Branco",
        status: true,
        lastBuy: "19/06/26",
        totalBuy: 670,
      },
      {
        name: "Leonardo Castro",
        tel: "63999012345",
        email: "leonardo.castro23@gmail.com",
        city: "Palmas",
        status: true,
        lastBuy: "02/04/26",
        totalBuy: 2560,
      },
      {
        name: "Bianca Teixeira",
        tel: "69990123456",
        email: "bianca.teixeira24@gmail.com",
        city: "Porto Velho",
        status: true,
        lastBuy: "10/03/26",
        totalBuy: 790,
      },
      {
        name: "Eduardo Melo",
        tel: "96991234567",
        email: "eduardo.melo25@gmail.com",
        city: "Macapá",
        status: true,
        lastBuy: "30/05/26",
        totalBuy: 3420,
      },
    ],
        finance: [],
        alerts: [],
      },
    ],
  );

  localStorage.setItem("userData", JSON.stringify(userData))

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const validations = {
    email: {
      isNull: [
        !email || email.trim().length === 0,
        "Preencha o campo Email para continuar!",
      ],
      exists: [
        userData.some((data) => email.trim().toLowerCase() === data.email),
        "Email já cadastrado, tente outro!",
      ],
    },
    password: {
      isTiny: [
        password.trim().length < 8,
        "A senha precisa ser maior ou igual à 8 caracteres!",
      ],
    },
    confirmPassword: {
      different: [
        password.trim() !== passwordConfirm.trim(),
        "As duas senhas estão diferentes!",
      ],
    },
  };

  const isValid = Object.values(validations).every((field) =>
    Object.values(field).every(([failed]) => !failed),
  );

  function saveData(formValidity) {
    if (isValid && formValidity) {
      const newData = [
        ...userData,
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
          storage: [],
          customers: [],
          finance: [],
          alerts: [],
        },
      ];

      localStorage.setItem("userData", JSON.stringify(newData));
      setUserData(newData);
    }
  }

  return (
    <>
      <Header colors={Global.colors}></Header>
      <Body colors={Global.colors} direction={"flex-col"}>
        <section
          className={`flex flex-col items-center justify-center h-screen`}
        >
          <form
            action=""
            className={`flex flex-col items-center justify-center gap-5 w-8/10 max-w-110 px-4 py-10 text-justify wrap-break-word ${Global.colors.frontground0} rounded-2xl shadow-2xl`}
            onSubmit={(form) => {
              form.preventDefault();
              saveData(form.currentTarget.checkValidity());

              const validEmail = email.trim().toLowerCase();

              if (form.currentTarget.checkValidity() && isValid) {
                navigate("/landing");
                localStorage.setItem("logged", validEmail);
              }
            }}
          >
            <h1 className={presets.title}>Cadastro</h1>

            <LoginSignonInput
              name={"Email"}
              type={"email"}
              toggleVisibility={false}
              colors={Global.colors}
              setValue={setEmail}
              errorMsg={
                validations.email.isNull[0]
                  ? validations.email.isNull[1]
                  : validations.email.exists[0]
                    ? validations.email.exists[1]
                    : ""
              }
            ></LoginSignonInput>

            <LoginSignonInput
              name={"Senha"}
              type={"text"}
              toggleVisibility={true}
              colors={Global.colors}
              setValue={setPassword}
              errorMsg={
                validations.password.isTiny[0]
                  ? validations.password.isTiny[1]
                  : ""
              }
            ></LoginSignonInput>

            <LoginSignonInput
              name={"Confirmar senha"}
              type={"text"}
              toggleVisibility={true}
              colors={Global.colors}
              setValue={setPasswordConfirm}
              errorMsg={
                validations.confirmPassword.different[0]
                  ? validations.confirmPassword.different[1]
                  : ""
              }
            ></LoginSignonInput>

            <div className={` flex flex-col place-items-center w-5/6 `}>
              <button
                className={
                  presets.bgButton +
                  ` w-full ${isValid ? "presets.scaleChange" : "opacity-50 cursor-default!"} `
                }
                type="submit"
              >
                Criar conta
              </button>

              <span
                className=" text-violet-500 font-bold cursor-pointer "
                onClick={() => navigate("/login")}
              >
                Já possuí uma conta? Clique aqui.
              </span>
            </div>
          </form>
        </section>
      </Body>
      <Footer colors={Global.colors}></Footer>
    </>
  );
}
export default Signon;
