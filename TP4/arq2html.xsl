<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="/">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português</title>
                    <meta charset="UTF-8"/>
                </head>
                
                <body>
                    <h1><center>Arqueossítios do Nordeste Português</center></h1>
                </body>
            </html>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <html>
            <head>
                <title><xsl:value-of select="IDENTI"/></title>
                <meta charset="UTF-8"/>
            </head>
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
            <body>
                <h1 style="font-variant: small-caps"><center><xsl:value-of select="IDENTI"/></center></h1>
                <center>
                    <address>
                        <a href="index.html">Voltar à página principal</a>
                    </address>
                </center>
                
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
                    <xsl:choose>
                        <xsl:when test="LUGAR">
                            <tr>
                                <th>Lugar:</th>
                                <td><xsl:value-of select="LUGAR"/></td>            
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                    
                    
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
                    <xsl:choose>
                        <xsl:when test="BIBLIO">
                            <tr>
                                <th>Bibliografia:</th>
                                <td><xsl:value-of select="BIBLIO"/></td>
                            </tr>
                            
                        </xsl:when>
                    </xsl:choose>
                   
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
        
    </xsl:template>  
</xsl:stylesheet>