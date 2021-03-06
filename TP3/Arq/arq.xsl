<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="./html/index.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português</title>
                    <meta charset="UTF-8"/>
                </head>
                
                <body>
                    <h1><center>Arqueossítios do Nordeste Português</center></h1>
                    <h3>Índice dos Arqueossítios</h3>
                    <xsl:apply-templates mode="indice"/>
                </body>
                    
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <ul>
            <li>
                <a href="./arq_{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
            </li>
        </ul>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="./html/arq_{generate-id()}.html">
            <html>
                <head>
                    <title><xsl:value-of select="IDENTI"/></title>
                    <meta charset="UTF-8"/>
                    
                    <style>
                        body {
                        background: linear-gradient(to bottom, #ccf5ff 0%, #ffffff 100%);
                        }
                        
                        table {
                        border-collapse: collapse;
                        }
                        
                        th, td {
                        padding: 8px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                        }
                        
                        table#t02 {
                        border: 2px solid black;
                        border-collapse: collapse;
                        }
                        
                        table#t02 th, table#t02 td {
                        padding: 8px;
                        text-align: center;
                        border-bottom: 2px solid black;
                        background-color: white;
                        width: 50%;
                        border-left: 2px solid black;
                        }
                        
                        table#t02 th {
                        background-color: #b5e7a0;
                        color: black;
                        }
                    </style>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </head>
                
                <body>
                    <h1 style="font-variant: small-caps"><center><xsl:value-of select="IDENTI"/></center></h1>
                    <address>
                        <center>
                            <a   class="fa fa-angle-double-right" href="index.html#{generate-id()}"> Voltar à Página Inicial</a>
                        </center>
                    </address>
                    <p/>
                    
                    <table id="t02" align="center">
                        <tr>
                            <th>Tipo:</th><td><xsl:value-of select="TIPO/@ASSUNTO"/></td>
                            
                            <xsl:choose>
                                <xsl:when test="IMAGEM/@NOME">
                                    <tr>
                                        <th>Imagem:</th>
                                        <td>
                                            <img src="{IMAGEM/@NOME}"> 
                                                <xsl:value-of select="IMAGEM/@NOME"/>
                                            </img> 
                                        </td>
                                    </tr>
                                </xsl:when>
                            </xsl:choose>
                        </tr> 
                    </table>
                    
                    <p/>
                    
                    <table>
                        <tr>
                            <th>Descrição:</th>
                            <td><xsl:value-of select="DESCRI"/></td>            
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="CRONO">
                                <tr>
                                    <th>Cronologia:</th>
                                    <td><xsl:value-of select="CRONO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        <tr>
                            <th>Lugar:</th>
                            <td><xsl:value-of select="LUGAR"/></td>            
                        </tr>
                        
                        <tr>
                            <th>Freguesia:</th>
                            <td><xsl:value-of select="FREGUE"/></td>            
                        </tr>
                        
                        <tr>
                            <th>Concelho:</th>
                            <td><xsl:value-of select="CONCEL"/></td>            
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="CODADM">
                                <tr>
                                    <th>Codadm</th><td><xsl:value-of select="CODADM"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <tr>
                            <th>Latitude:</th>
                            <td><xsl:value-of select="LATITU"/></td>            
                        </tr>
                        
                        <tr>
                            <th>Longitude:</th>
                            <td><xsl:value-of select="LONGIT"/></td>            
                        </tr>
                        
                        <tr>
                            <th>Altitude:</th>
                            <td><xsl:value-of select="ALTITU"/></td>            
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="ACESSO">
                                <tr>
                                    <th>Acesso:</th><td><xsl:value-of select="ACESSO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="QUADRO">
                                <tr>
                                    <th>Quadro:</th><td><xsl:value-of select="QUADRO"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="TRAARQ">
                                <tr>
                                    <th>Traarq:</th><td><xsl:value-of select="TRAARQ"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <tr>
                            <th>Desarq:</th>
                            <td><xsl:value-of select="DESARQ"/></td>
                        </tr>
                        
                        <xsl:choose>
                            <xsl:when test="INTERP">
                                <tr>
                                    <th>Interp:</th>
                                    <td><xsl:value-of select="INTERP"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="DEPOSI">
                                <tr>
                                    <th>Depósito:</th>
                                    <td><xsl:value-of select="DEPOSI"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <xsl:choose>
                            <xsl:when test="INTERE">
                                <tr>
                                    <th>Intere:</th>
                                    <td><xsl:value-of select="INTERE"/></td>
                                </tr>
                            </xsl:when>
                        </xsl:choose>
                        
                        <tr>
                            <th>Bibliografia:</th>
                            <td><xsl:value-of select="BIBLIO"/></td>
                        </tr>
                        
                        <tr>
                            <th>Autor:</th>
                            <td><xsl:value-of select="AUTOR"/></td>
                        </tr>
                        
                        <tr>
                            <th>Data:</th>
                            <td><xsl:value-of select="DATA"/></td>
                        </tr>
                    </table>   
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
</xsl:stylesheet>