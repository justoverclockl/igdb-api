import app from 'flarum/admin/app';

app.initializers.add('justoverclock/igdb-api', () => {
  app.extensionData
    .for('justoverclock-igdb-api')
    .registerSetting({
      setting: 'justoverclock-igdb-api.RawgApiKey',
      name: 'justoverclock-igdb-api.RawgApiKey',
      type: 'text',
      label: app.translator.trans('justoverclock-igdb-api.admin.rawgApi'),
      help: app.translator.trans('justoverclock-igdb-api.admin.rawgApi-help'),
    })
});
