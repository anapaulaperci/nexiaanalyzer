import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Contact, Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const CRM = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            CRM - Gestão de Relacionamento
          </h1>
          <p className="text-muted-foreground mt-2">
            Gerencie seus contatos, leads e relacionamentos com clientes
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Novo Contato
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Contatos
            </CardTitle>
            <CardDescription>
              Gerencie sua base de contatos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Total de contatos</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Contact className="w-5 h-5 text-primary" />
              Leads
            </CardTitle>
            <CardDescription>
              Acompanhe seus leads ativos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Leads em andamento</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              Campanhas
            </CardTitle>
            <CardDescription>
              Campanhas ativas no CRM
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Campanhas ativas</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Funcionalidades do CRM</CardTitle>
          <CardDescription>
            Ferramentas disponíveis para gestão de relacionamento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Gestão de Contatos</h3>
              <p className="text-sm text-muted-foreground">
                Organize e gerencie todos os seus contatos em um só lugar
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Pipeline de Vendas</h3>
              <p className="text-sm text-muted-foreground">
                Acompanhe o progresso dos seus leads através do funil de vendas
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Histórico de Interações</h3>
              <p className="text-sm text-muted-foreground">
                Mantenha um registro completo de todas as interações com clientes
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Relatórios e Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Analise métricas de performance e ROI das suas campanhas
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CRM;