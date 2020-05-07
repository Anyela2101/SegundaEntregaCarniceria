using Entity;

namespace Carniceria.Models
{
    public class ClientesModel
    {
        public class ClientesInputModel{
            public string identificacion {get;set;}
            public string nombres {get;set;}
            public string apellidos {get;set;}
            public string direccion {get;set;}
            public string telefono {get;set;}
            public string email {get;set;}

        }

        public class ClientesViewModel: ClientesInputModel{
            public ClientesViewModel(){

            }

            public ClientesViewModel(Clientes clientes){
                identificacion =clientes.identificacion;
                nombres=clientes.nombres;
                apellidos = clientes.apellidos;
                direccion =clientes.direccion;
                telefono =clientes.telefono;
                email = clientes.email;
            }
        }
    }
}