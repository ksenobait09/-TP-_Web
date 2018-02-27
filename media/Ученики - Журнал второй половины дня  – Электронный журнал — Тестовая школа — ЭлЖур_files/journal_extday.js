var extrpc = new rpc(true);

var JournalExtday = {
    url: '/journal-extday-rpc-action',
    url_settings: '/journal-extday-settings-action',
    url_settings_postfix: '/p.',
    action: extrpc.action,

    set_lessons: function(lessons) {
        //lessons is string (json-encoded array)
        extrpc.addParameter('lessons', lessons);
        extrpc.post(
        this.action('set_lessons'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
        });
    },

    set_teachers: function(teachers) {
        //teachers is string (json-encoded array)
        //console.log(teachers, teachers.length);

        extrpc.addParameter('teachers', teachers);
        extrpc.post(
            this.action('set_teachers'),

            function(request) {
                ans = eval(request);
                if (ans.result === false && ans.error != '') {
                    alert(ans.error);
                }
                $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
                alert(saved);
            }
        );
    },

    set_cost: function(cost) {
        //cost is string (json-encoded array)
        //console.log(cost, cost.length);

        extrpc.addParameter('cost', cost);
        extrpc.post(
        this.action('set_cost'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
        });
    },

    set_longness: function(longness) {
        //longness is string (json-encoded array)

        extrpc.addParameter('longness', longness);
        extrpc.post(
        this.action('set_longness'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
        });
    },

    set_groups: function(groups) {
        //longness is string (json-encoded array)

        extrpc.addParameter('groups', groups);
        extrpc.post(
        this.action('set_groups'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
        });
    },

    set_schedule_list: function(list) {
        //list is string (json-encoded array)

        extrpc.addParameter('list', list);
        extrpc.post(
        this.action('set_schedule_list'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
        });
    },

    set_schedule: function(data, id, startdate, comment) {
        //data is string (json-encoded array)

        conflicts_show = conflicts_show || false;
        url_settings = this.url_settings + this.url_settings_postfix;

        extrpc.addParameter('data', data);
        extrpc.addParameter('id', id);
        extrpc.addParameter('startdate', startdate);
        extrpc.addParameter('comment', comment);
        extrpc.post(
        this.action('set_schedule'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }

            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
            // console.log(ans.conflict);
            if (id == 'new') {
                schedule_id = ans.id.toString();
            }
            if(ans.students_conflicts === true && conflicts_show) {
                Boxy.confirm(
                    '<div>В данном расписании есть конфликты (некоторые ученики в один момент времени по расписанию находятся на нескольких занятиях). Вы хотите перейти к списку конфликтов?</div>'
                    ,
                    function() {
                        top.location.href = url_settings + 'conflicts/conflict_p.students_conflicts/sid.' + schedule_id;
                    }
                );
            }
            else if (ans.teachers_conflicts === true && conflicts_show) {
                Boxy.confirm(
                    '<div>В данном расписании есть конфликты (некоторые учителя в один момент времени по расписанию находятся на нескольких занятиях). Вы хотите перейти к списку конфликтов?</div>'
                    ,
                    function() {
                        top.location.href = url_settings + 'conflicts/conflict_p.teachers_conflicts/sid.' + schedule_id;
                    }
                );
            }
        });
    },

    set_students_changes_only: function(group_id, actions, date, order_num, order_date) {
      conflicts_show = conflicts_show || false;
      url_settings = this.url_settings + this.url_settings_postfix;
      // console.log(group_id, actions, date, order_num, order_date);
      extrpc.addParameter('group_id', group_id);
      extrpc.addParameter('actions', JSON.stringify(actions));
      extrpc.addParameter('date', date);
      extrpc.addParameter('order_num', order_num);
      extrpc.addParameter('order_date', order_date);

      extrpc.post(
      this.action('set_students_changes_only'),
      function(request) {
        ans = eval(request);
        if(ans.result === false && ans.error != '') {
          alert(ans.error);
        }
        $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
        alert(saved);
        if(ans.students_conflicts === true && conflicts_show) {
            Boxy.confirm(
                '<div>В данном расписании есть конфликты (некоторые ученики в один момент времени по расписанию находятся на нескольких занятиях). Вы хотите перейти к списку конфликтов?</div>'
                ,
                function() {
                    top.location.href = url_settings + 'conflicts/conflict_p.students_conflicts';
                }
            );
        }
      });
    },

    set_addload: function(data) {
        // data is string (json-encoded array)

        extrpc.addParameter('data', data);
        extrpc.post(
        this.action('set_addload'),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
            alert(saved);
        });
    },
    set_holidays: function(data, common) {
        // data is string (json-encoded array)
        common = common || false

        extrpc.addParameter('data', data);
        extrpc.post(
        this.action('set_holidays' + (common ? '_common' : '')),

        function(request) {
            ans = eval(request);
            if (ans.result === false && ans.error != '') {
                alert(ans.error);
            }
            $('#save').attr('disabled', false).removeClass('button--gray').addClass('button--red').css('opacity', 1);
            alert(saved);
        });
    },
    // Добавление предмета в поиск конфликтов
    add_conflict_lesson: function(id){
        extrpc.callPool(
            this.action('add_conflict_lesson', [id]),
            function(request) {
                ans = eval(request);
                if (ans.result === false && ans.error != ''){
                    alert(ans.error);
                }
            }
        );
    },
    // Удаление предмета из поиска конфликтов
    remove_conflict_lesson: function(id){
        extrpc.callPool(
            this.action('remove_conflict_lesson', [id]),
            function(request) {
                ans = eval(request);
                if (ans.result === false && ans.error != ''){
                    alert(ans.error);
                }
            }
        );
    },

    // сохранение настроек оплаты
    set_payment_settings: function(settings) {
        extrpc.callPool(
            this.action('set_payment_settings', [settings]),
            function(request) {
                ans = eval(request);
                if (ans.result === false && ans.error != '') {
                    alert(ans.error);
                }
                $(saveButtons).each(function(key, button) {
                    $(button).attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
                });
                alert(saved);
            }
        );
    },

    // сохранение настроек стоимости занятий
    set_cost_settings: function(settings) {
        extrpc.callPool(
            this.action('set_cost_settings', [settings]),
            function(request) {
                ans = eval(request);
                if (ans.result === false && ans.error != '') {
                    alert(ans.error);
                }
                $('#save').attr('disabled', false).removeClass('btn-gray').addClass('btn-red').css('opacity', 1);
                alert(saved);
            }
        );
    },

    // зачисление средств на лицевой счет
    add_payment: function(uid, sum) {
        extrpc.callPool(
            this.action('add_payment', [uid, sum]),
            function(request) {
                ans = eval(request);
                if (ans.result === false && ans.error != '') {
                    alert(ans.error);
                }
                $('tr[uid="' + uid  + '"]').find('.extday-pay-balance')
                    .text(ans.balance)
                    .toggleClass('green', ans.balance >= 0)
                    .toggleClass('red', ans.balance < 0);
                alert(saved);
            }
        );
    }

};
