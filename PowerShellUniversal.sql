IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Computer] (
    [Id] bigint NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Computer] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [DbVersion] (
    [Id] bigint NOT NULL IDENTITY,
    [DatabaseVersion] int NOT NULL,
    [UpgradeDate] datetime2 NOT NULL,
    CONSTRAINT [PK_DbVersion] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [GitStatus] (
    [Id] bigint NOT NULL IDENTITY,
    [CommitId] nvarchar(max) NULL,
    [Timestamp] datetime2 NOT NULL,
    [SyncTime] time NOT NULL,
    [Changes] int NOT NULL,
    [Location] nvarchar(max) NULL,
    [Remote] nvarchar(max) NULL,
    [Result] int NOT NULL,
    [ResultMessage] nvarchar(max) NULL,
    CONSTRAINT [PK_GitStatus] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Identity] (
    [Id] bigint NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [Source] int NOT NULL,
    [RoleName] nvarchar(max) NULL,
    CONSTRAINT [PK_Identity] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [JobLog] (
    [Id] bigint NOT NULL,
    [Log] nvarchar(max) NULL
);
GO

CREATE TABLE [Upload] (
    [Id] bigint NOT NULL IDENTITY,
    [UploadId] nvarchar(max) NULL,
    [Name] nvarchar(max) NULL,
    [FileName] nvarchar(max) NULL,
    [TimeStamp] datetime2 NOT NULL,
    [ContentType] nvarchar(max) NULL,
    CONSTRAINT [PK_Upload] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Variable] (
    [Id] bigint NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [Value] nvarchar(max) NULL,
    [UserName] nvarchar(max) NULL,
    [Password] nvarchar(max) NULL,
    [Secret] bit NOT NULL,
    [Vault] nvarchar(max) NULL,
    [Type] nvarchar(max) NULL,
    [CreatedTime] datetime2 NOT NULL,
    [UpdatedTime] datetime2 NOT NULL,
    [Description] nvarchar(max) NULL,
    [MissingSecret] bit NOT NULL,
    [DisableRunAsSupport] bit NOT NULL,
    CONSTRAINT [PK_Variable] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AppToken] (
    [Id] bigint NOT NULL IDENTITY,
    [Token] nvarchar(max) NULL,
    [IdentityId] bigint NOT NULL,
    [Revoked] bit NOT NULL,
    [Role] nvarchar(max) NULL,
    [Created] datetime2 NOT NULL,
    [Expiration] datetime2 NOT NULL,
    [RevokedDate] datetime2 NOT NULL,
    [CreatedById] bigint NULL,
    CONSTRAINT [PK_AppToken] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AppToken_Identity_CreatedById] FOREIGN KEY ([CreatedById]) REFERENCES [Identity] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_AppToken_Identity_IdentityId] FOREIGN KEY ([IdentityId]) REFERENCES [Identity] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [TerminalInstance] (
    [Id] bigint NOT NULL IDENTITY,
    [Terminal] nvarchar(max) NULL,
    [ProcessId] int NOT NULL,
    [IdentityId] bigint NULL,
    [Status] int NOT NULL,
    [IdleTime] datetime2 NOT NULL,
    [StartTime] datetime2 NOT NULL,
    [Port] int NOT NULL,
    CONSTRAINT [PK_TerminalInstance] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_TerminalInstance_Identity_IdentityId] FOREIGN KEY ([IdentityId]) REFERENCES [Identity] ([Id]) ON DELETE NO ACTION
);
GO

CREATE TABLE [Job] (
    [Id] bigint NOT NULL IDENTITY,
    [CreatedTime] datetime2 NOT NULL,
    [StartTime] datetime2 NOT NULL,
    [EndTime] datetime2 NOT NULL,
    [Status] int NOT NULL,
    [Output] nvarchar(max) NULL,
    [IsScriptDeleted] bit NOT NULL,
    [ScriptFullPath] nvarchar(max) NULL,
    [ScriptCommitId] nvarchar(max) NULL,
    [AppTokenId] bigint NULL,
    [IdentityId] bigint NOT NULL,
    [ParentJobId] bigint NULL,
    [ParentLineNumber] int NOT NULL,
    [Debug] bit NOT NULL,
    [ComputerName] nvarchar(max) NULL,
    [Port] int NOT NULL,
    [ProcessId] int NOT NULL,
    [RunspaceId] int NOT NULL,
    [Activity] nvarchar(max) NULL,
    [CurrentOperation] nvarchar(max) NULL,
    [PercentComplete] int NOT NULL,
    [SecondsRemaining] int NOT NULL,
    [StatusDescription] nvarchar(max) NULL,
    [Environment] nvarchar(max) NULL,
    [AgentId] bigint NULL,
    [ComputerId] bigint NOT NULL,
    [ErrorAction] int NOT NULL,
    [Notes] nvarchar(max) NULL,
    [Credential] nvarchar(max) NULL,
    [ScheduleId] bigint NOT NULL,
    [Triggered] bit NOT NULL,
    [Trigger] nvarchar(max) NULL,
    [AccessToken] nvarchar(max) NULL,
    [IdToken] nvarchar(max) NULL,
    [RetryCount] int NOT NULL,
    CONSTRAINT [PK_Job] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Job_AppToken_AppTokenId] FOREIGN KEY ([AppTokenId]) REFERENCES [AppToken] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_Job_Computer_AgentId] FOREIGN KEY ([AgentId]) REFERENCES [Computer] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_Job_Computer_ComputerId] FOREIGN KEY ([ComputerId]) REFERENCES [Computer] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Job_Identity_IdentityId] FOREIGN KEY ([IdentityId]) REFERENCES [Identity] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Job_Job_ParentJobId] FOREIGN KEY ([ParentJobId]) REFERENCES [Job] ([Id]) ON DELETE NO ACTION
);
GO

CREATE TABLE [JobFeedback] (
    [Id] bigint NOT NULL IDENTITY,
    [Data] nvarchar(max) NULL,
    [Message] nvarchar(max) NULL,
    [Complete] bit NOT NULL,
    [IdentityId] bigint NULL,
    [JobId] bigint NULL,
    CONSTRAINT [PK_JobFeedback] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_JobFeedback_Identity_IdentityId] FOREIGN KEY ([IdentityId]) REFERENCES [Identity] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_JobFeedback_Job_JobId] FOREIGN KEY ([JobId]) REFERENCES [Job] ([Id]) ON DELETE NO ACTION
);
GO

CREATE TABLE [JobOutput] (
    [Id] bigint NOT NULL IDENTITY,
    [Message] nvarchar(max) NULL,
    [Type] int NOT NULL,
    [Data] nvarchar(max) NULL,
    [JobId] bigint NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_JobOutput] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_JobOutput_Job_JobId] FOREIGN KEY ([JobId]) REFERENCES [Job] ([Id]) ON DELETE NO ACTION
);
GO

CREATE TABLE [JobParameter] (
    [Id] bigint NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [DisplayName] nvarchar(max) NULL,
    [Type] nvarchar(max) NULL,
    [JobId] bigint NULL,
    [Value] nvarchar(max) NULL,
    [VariableId] bigint NULL,
    [IsVariable] bit NOT NULL,
    [DisplayType] int NOT NULL,
    CONSTRAINT [PK_JobParameter] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_JobParameter_Job_JobId] FOREIGN KEY ([JobId]) REFERENCES [Job] ([Id]) ON DELETE NO ACTION,
    CONSTRAINT [FK_JobParameter_Variable_VariableId] FOREIGN KEY ([VariableId]) REFERENCES [Variable] ([Id]) ON DELETE NO ACTION
);
GO

CREATE TABLE [JobPipelineOutput] (
    [Id] bigint NOT NULL,
    [Data] nvarchar(max) NULL,
    [JsonData] nvarchar(max) NULL,
    [JobId] bigint NULL,
    CONSTRAINT [FK_JobPipelineOutput_Job_JobId] FOREIGN KEY ([JobId]) REFERENCES [Job] ([Id]) ON DELETE NO ACTION
);
GO

CREATE TABLE [Notification] (
    [Id] bigint NOT NULL IDENTITY,
    [Title] nvarchar(max) NULL,
    [Description] nvarchar(max) NULL,
    [CreatedTime] datetime2 NOT NULL,
    [CreatedBy] nvarchar(max) NULL,
    [JobId] bigint NULL,
    [IdentityId] bigint NOT NULL,
    CONSTRAINT [PK_Notification] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Notification_Identity_IdentityId] FOREIGN KEY ([IdentityId]) REFERENCES [Identity] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Notification_Job_JobId] FOREIGN KEY ([JobId]) REFERENCES [Job] ([Id]) ON DELETE NO ACTION
);
GO

CREATE INDEX [IX_AppToken_CreatedById] ON [AppToken] ([CreatedById]);
GO

CREATE INDEX [IX_AppToken_IdentityId] ON [AppToken] ([IdentityId]);
GO

CREATE INDEX [IX_Job_AgentId] ON [Job] ([AgentId]);
GO

CREATE INDEX [IX_Job_AppTokenId] ON [Job] ([AppTokenId]);
GO

CREATE INDEX [IX_Job_ComputerId] ON [Job] ([ComputerId]);
GO

CREATE INDEX [IX_Job_IdentityId] ON [Job] ([IdentityId]);
GO

CREATE INDEX [IX_Job_ParentJobId] ON [Job] ([ParentJobId]);
GO

CREATE INDEX [IX_JobFeedback_IdentityId] ON [JobFeedback] ([IdentityId]);
GO

CREATE INDEX [IX_JobFeedback_JobId] ON [JobFeedback] ([JobId]);
GO

CREATE INDEX [IX_JobOutput_JobId] ON [JobOutput] ([JobId]);
GO

CREATE INDEX [IX_JobParameter_JobId] ON [JobParameter] ([JobId]);
GO

CREATE INDEX [IX_JobParameter_VariableId] ON [JobParameter] ([VariableId]);
GO

CREATE INDEX [IX_JobPipelineOutput_JobId] ON [JobPipelineOutput] ([JobId]);
GO

CREATE INDEX [IX_Notification_IdentityId] ON [Notification] ([IdentityId]);
GO

CREATE INDEX [IX_Notification_JobId] ON [Notification] ([JobId]);
GO

CREATE INDEX [IX_TerminalInstance_IdentityId] ON [TerminalInstance] ([IdentityId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220201023444_Init', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Job] ADD [MemoryBytes] bigint NOT NULL DEFAULT CAST(0 AS bigint);
GO

ALTER TABLE [Job] ADD [Tags] nvarchar(max) NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220412195308_tag', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [AppToken] ADD [Description] nvarchar(max) NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220505183416_TokenDescription', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [ProtectEvents] (
    [Id] bigint NOT NULL IDENTITY,
    [ComputerName] nvarchar(max) NULL,
    [Rule] nvarchar(max) NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProtectEvents] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220529200901_Protect', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [ProtectEvents] ADD [Administrator] bit NOT NULL DEFAULT CAST(0 AS bit);
GO

ALTER TABLE [ProtectEvents] ADD [ApplicationName] nvarchar(max) NULL;
GO

ALTER TABLE [ProtectEvents] ADD [ContentPath] nvarchar(max) NULL;
GO

ALTER TABLE [ProtectEvents] ADD [DomainName] nvarchar(max) NULL;
GO

ALTER TABLE [ProtectEvents] ADD [Script] nvarchar(max) NULL;
GO

ALTER TABLE [ProtectEvents] ADD [UserName] nvarchar(max) NULL;
GO

ALTER TABLE [Notification] ADD [Level] int NOT NULL DEFAULT 0;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220606180251_NotificationLevel', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Activations] (
    [Id] bigint NOT NULL IDENTITY,
    [ActivationLicense] nvarchar(max) NULL,
    [License] nvarchar(max) NULL,
    CONSTRAINT [PK_Activations] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220616161717_Activations', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Computer] ADD [HeartBeat] datetime2 NOT NULL DEFAULT '0001-01-01T00:00:00.0000000';
GO

ALTER TABLE [Computer] ADD [Status] int NOT NULL DEFAULT 0;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220622125648_Computers', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Variable] ADD [DeleteSecret] bit NOT NULL DEFAULT CAST(0 AS bit);
GO

CREATE TABLE [GitSettings] (
    [Id] bigint NOT NULL IDENTITY,
    [Remote] nvarchar(max) NULL,
    [Branch] nvarchar(max) NULL,
    [SyncBehavior] int NOT NULL,
    [InitBehavior] int NOT NULL,
    [UserName] nvarchar(max) NULL,
    [Password] nvarchar(max) NULL,
    [Interval] int NOT NULL,
    CONSTRAINT [PK_GitSettings] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220704105852_GitSettings', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Computer] ADD [GrpcPort] int NOT NULL DEFAULT 0;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220704132553_GrpcPort', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [TerminalHistory] (
    [Id] bigint NOT NULL IDENTITY,
    [Input] nvarchar(max) NULL,
    [Output] nvarchar(max) NULL,
    [Timestamp] datetime2 NOT NULL,
    [ExecutionTime] time NOT NULL,
    [TerminalInstanceId] bigint NULL,
    CONSTRAINT [PK_TerminalHistory] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_TerminalHistory_TerminalInstance_TerminalInstanceId] FOREIGN KEY ([TerminalInstanceId]) REFERENCES [TerminalInstance] ([Id])
);
GO

CREATE INDEX [IX_TerminalHistory_TerminalInstanceId] ON [TerminalHistory] ([TerminalInstanceId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220704142607_TerminalHistory', N'6.0.1');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Job] DROP CONSTRAINT [FK_Job_Computer_ComputerId];
GO

ALTER TABLE [Notification] DROP CONSTRAINT [FK_Notification_Identity_IdentityId];
GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Notification]') AND [c].[name] = N'IdentityId');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Notification] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [Notification] ALTER COLUMN [IdentityId] bigint NULL;
GO

ALTER TABLE [Job] ADD CONSTRAINT [FK_Job_Computer_ComputerId] FOREIGN KEY ([ComputerId]) REFERENCES [Computer] ([Id]);
GO

ALTER TABLE [Notification] ADD CONSTRAINT [FK_Notification_Identity_IdentityId] FOREIGN KEY ([IdentityId]) REFERENCES [Identity] ([Id]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20220714160753_ForeignKeyFix', N'6.0.1');
GO

COMMIT;
GO

