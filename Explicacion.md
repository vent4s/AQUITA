# 📋 GUÍA COMPLETA DE INSTALACIÓN Y GITHUB

## 🚀 INSTALACIÓN LOCAL PASO A PASO

### **PASO 1: Instalar Node.js**
1. Ve a https://nodejs.org/
2. Descarga la versión LTS (recomendada)
3. Ejecuta el instalador y sigue las instrucciones
4. Verifica la instalación abriendo terminal/cmd y escribiendo:
   ```bash
   node --version
   npm --version
   ```

### **PASO 2: Descargar el Proyecto**
1. Descarga todos los archivos del proyecto manteniendo la estructura de carpetas
2. Crea una carpeta llamada `directorio-negocios` 
3. Coloca todos los archivos dentro de la carpeta principal:
   - `index.html`, `package.json`, `main.js`, `style.css`, `counter.js` y `Explicacion.md` en la raíz
4. **IMPORTANTE**: Todos los archivos van en la carpeta principal, no necesitas subcarpetas

### **PASO 3: Instalar Dependencias**
1. Abre terminal/cmd en la carpeta del proyecto
2. Ejecuta:
   ```bash
   npm install
   ```
3. Espera a que se instalen todas las dependencias

### **PASO 4: Ejecutar el Proyecto**
1. En la terminal, ejecuta:
   ```bash
   npm run dev
   ```
2. Abre tu navegador en: http://localhost:5173
3. ¡Tu página web estará funcionando!

---

## 📁 ESTRUCTURA DE ARCHIVOS
```
directorio-negocios/
├── index.html          # Página principal
├── main.js             # JavaScript principal
├── style.css           # Estilos CSS
├── counter.js          # Archivo auxiliar
├── package.json        # Configuración del proyecto
├── package-lock.json   # Archivo de dependencias (se crea automáticamente)
└── Explicacion.md      # Este archivo
```

---

## 🌐 SUBIR A GITHUB PASO A PASO

### **PASO 1: Crear Cuenta en GitHub**
1. Ve a https://github.com
2. Haz clic en "Sign up"
3. Completa el registro con tu email y contraseña
4. Verifica tu email

### **PASO 2: Instalar Git**
1. Ve a https://git-scm.com/
2. Descarga Git para tu sistema operativo
3. Instala siguiendo las instrucciones
4. Verifica la instalación:
   ```bash
   git --version
   ```

### **PASO 3: Configurar Git (Solo la primera vez)**
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### **PASO 4: Crear Repositorio en GitHub**
1. Inicia sesión en GitHub
2. Haz clic en el botón verde "New" o "+"
3. Nombra tu repositorio: `directorio-negocios`
4. Marca como "Public" o "Private" según prefieras
5. NO marques "Initialize with README"
6. Haz clic en "Create repository"

### **PASO 5: Subir tu Proyecto**
1. Abre terminal en la carpeta de tu proyecto
2. Ejecuta estos comandos uno por uno:

```bash
# Inicializar repositorio local
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primer commit - Directorio de negocios"

# Conectar con GitHub (cambia TU-USUARIO por tu nombre de usuario)
git remote add origin https://github.com/TU-USUARIO/directorio-negocios.git

# Subir los archivos
git push -u origin main
```

### **PASO 6: Verificar que se subió correctamente**
1. Ve a tu repositorio en GitHub
2. Deberías ver todos tus archivos
3. ¡Listo! Tu proyecto está en GitHub

---

## 🔄 ACTUALIZAR EL PROYECTO EN GITHUB

Cuando hagas cambios en tu código:

```bash
# Agregar cambios
git add .

# Hacer commit con descripción
git commit -m "Descripción de los cambios"

# Subir cambios
git push
```

---

## 🌍 PUBLICAR EN INTERNET (GitHub Pages)

### **Opción 1: GitHub Pages**
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. Busca "Pages" en el menú lateral
4. En "Source" selecciona "Deploy from a branch"
5. Selecciona "main" branch
6. Haz clic en "Save"
7. Tu página estará disponible en: `https://tu-usuario.github.io/directorio-negocios`

### **Opción 2: Netlify (Recomendado)**
1. Ve a https://netlify.com
2. Regístrate con tu cuenta de GitHub
3. Haz clic en "New site from Git"
4. Selecciona tu repositorio
5. En "Build command" escribe: `npm run build`
6. En "Publish directory" escribe: `dist`
7. Haz clic en "Deploy site"
8. ¡Tu página estará online en minutos!

---

## ⚙️ MODIFICAR URLs DE TRANSMISIÓN

Para cambiar las URLs de las transmisiones, edita el archivo `src/main.js`:
Para cambiar las URLs de las transmisiones, edita el archivo `main.js`:

```javascript
// Busca esta sección y cambia las URLs:
const streamingUrls = {
    iptv: 'TU_URL_DE_IPTV_AQUI',
    deportes: 'TU_URL_DE_DEPORTES_AQUI', 
    envivos: 'TU_URL_DE_ENVIVOS_AQUI'
};
```

**Ejemplos de URLs válidas:**
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Twitch: `https://player.twitch.tv/?channel=CANAL&parent=tu-dominio.com`

---

## 🆘 SOLUCIÓN DE PROBLEMAS COMUNES

### **Error: "command not found: npm"**
- Reinstala Node.js desde https://nodejs.org

### **Error: "Cannot resolve module" o archivos no encontrados**
- Verifica que todos los archivos estén en la carpeta principal
- Asegúrate de que `main.js`, `style.css` y `counter.js` estén en la raíz del proyecto
- NO uses subcarpetas, todos los archivos van en la carpeta principal

### **Error: "git not found"**
- Instala Git desde https://git-scm.com

### **Error al hacer push a GitHub**
- Verifica que el nombre de usuario y repositorio sean correctos
- Asegúrate de estar logueado en GitHub

### **La página no se ve bien en móvil**
- El diseño es responsive, prueba refrescando la página

### **Las transmisiones no cargan**
- Verifica que las URLs sean válidas
- Algunas plataformas no permiten embedding

---

## 📞 CONTACTO Y SOPORTE

Si tienes problemas:
1. Revisa esta guía paso a paso
2. Verifica que todos los archivos estén en la carpeta principal
3. Asegúrate de tener Node.js y Git instalados
4. Consulta la documentación oficial de cada herramienta

---

## 🎉 ¡FELICIDADES!

Si seguiste todos los pasos, ahora tienes:
- ✅ Tu proyecto funcionando localmente
- ✅ Tu código respaldado en GitHub  
- ✅ Tu página web publicada en internet
- ✅ La capacidad de actualizar y modificar todo

**¡Tu directorio de negocios está listo para usar!**