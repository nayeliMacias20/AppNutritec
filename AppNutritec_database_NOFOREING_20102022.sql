/*Nombre de la db AppNutritec*/

USE [AppNutritec]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO   /*creacion de la tabla count, esta tabla es la encargada de llevar el conteo de calorias consumidas y restantes, ademas tiene el pedo este de fecha para las llamadas de progreso, 
tiene dos llaves foraneas que aun me faltan implementar, en este caso son forsuscription para la validacion del usuario y forcount para el calendario de progreso*/
CREATE TABLE [dbo].[count](
  [id] [uniqueidentifier] NOT NULL,
  [date] [date] NOT NULL,
  [kcalcount] [int] NOT NULL,
  [kcalrest] [int] NOT NULL,
  [forsuscription] [uniqueidentifier] NOT NULL,
  [forcount] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO /*tabla general de comidas, el campo count nos servira, no para el conteo de calorias, si no para el conteo de cuantas veces se ingiere y que alimento*/
CREATE TABLE [dbo].[meals](
  [id] [uniqueidentifier] NOT NULL,
  [name] [nvarchar](20) NOT NULL,
  [description] [nvarchar](50) NOT NULL,
  [kcal] [int] NOT NULL,
  [count] [int] NOT NULL
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO /*tabla objetivos, aqui el pedo es bastante simple, rellenar con recomendaciones y hacer la llamada con un random*/
CREATE TABLE [dbo].[objetive](
  [id] [uniqueidentifier] NOT NULL,
  [obj] [nvarchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO /*tabla progreso, aqui simplemente mandaremos llamar la cantidad de calorias del dia para el calendario de progreso, 
ademas cuenta con la llave foranea que hace referencia a la tabla count para obtener detalles por dia*/
CREATE TABLE [dbo].[progress](
  [id] [uniqueidentifier] NOT NULL,
  [quan] [int] NOT NULL,
  [forcount] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO /*tabla para validar el usuario, el campo "suscription" esta agregado como int para hacer una sentencia de if, if user suscritpion equals 1 tiene suscripcion pagada, ifnot alv perro, 
llave foranea pendiente forsuscription para la validacion en el resto de tablas*/
CREATE TABLE [dbo].[suscription](
  [id] [uniqueidentifier] NOT NULL,
  [suscription] [int] NOT NULL,
  [forsuscription] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO /*tabla de usuarios*/
CREATE TABLE [dbo].[user](
  [id] [uniqueidentifier] NOT NULL,
  [username] [varchar](20) NOT NULL,
  [email] [varchar](20) NOT NULL,
  [password] [char](10) NOT NULL,
  [forsuscription] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
/*el dia de mañana en primer oportunidad subire la base de datos con las llaves foraneas configuradas 
y con informacion, mientras tanto espero esto les de una buena idea de la estuctura*/