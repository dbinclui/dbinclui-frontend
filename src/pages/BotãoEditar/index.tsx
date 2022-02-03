import { Button } from '@mui/material';
import React from 'react';

export default function BotaoEditar(){
    return (
        <Button style={{color:"black" }}  href="admin/atualizar-guia/:id">Editar</Button>
    )
}