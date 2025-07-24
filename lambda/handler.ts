export const handler = async (event: any) => {
  console.log("Evento recibido:", JSON.stringify(event));
  return { statusCode: 200, body: "¡Hola Mundo desde Lambda!" };
};
