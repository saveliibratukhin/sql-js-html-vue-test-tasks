/*Создание таблицы Контейнеры */
CREATE TABLE [dbo].[Контейнеры](
	[ИД] [uniqueidentifier] NOT NULL,
	[Номер] [int] NULL,
	[Тип] [varchar](50) NULL,
	[Длина] [float] NULL,
	[Ширина] [float] NULL,
	[Высота] [float] NULL,
	[Вес] [float] NULL,
	[Пустой/не пустой] [bit] NULL,
	[Дата поступления] [datetime] NULL,
 CONSTRAINT [PK_Контейнеры] PRIMARY KEY CLUSTERED 
(
	[ИД] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/*Создание таблицы операции */
CREATE TABLE [dbo].[Операции](
	[ИД] [uniqueidentifier] NOT NULL,
	[ИД Контейнера] [uniqueidentifier] NULL,
	[Дата начала операции] [datetime] NULL,
	[Дата окончания операции] [datetime] NULL,
	[Тип операции] [varchar](50) NULL,
	[ФИО оператора] [varchar](50) NULL,
	[Место инспекции] [varchar](50) NULL,
 CONSTRAINT [PK_Операции] PRIMARY KEY CLUSTERED 
(
	[ИД] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/*Добавление внешнего ключа на ИД контейнера */
ALTER TABLE [dbo].[Операции]  WITH CHECK ADD  CONSTRAINT [FK_Операции_Контейнеры] FOREIGN KEY([ИД Контейнера])
REFERENCES [dbo].[Контейнеры] ([ИД])
GO

/*Получение всех данных по контейнерам в формате JSON */
SELECT * FROM Контейнеры FOR JSON AUTO;

/*Получение всех данных по операциям для определённого контейнера в формате JSON */
DECLARE @cont_id UNIQUEIDENTIFIER;
SET @cont_id = '087F23BB-4AC2-437E-BF61-3C8AEB5211DB' /*Random ID, there can be used (select ИД from Контейнеры where ......)*/
SELECT * FROM Операции 
WHERE [ИД Контейнера] = @cont_id
FOR JSON AUTO

