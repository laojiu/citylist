(function () {
    var cityList = {
        el_content: null,
        cityData: [{
            first: 'A', city: [{ code: '513200', name: '����', py: 'aba', sx: 'ab' },
            { code: '652900', name: '������', py: 'akesu', sx: 'aks' },
            { code: '152900', name: '������', py: 'alashan', sx: 'als' },
            { code: '654300', name: '����̩', py: 'aletai', sx: 'alt' },
            { code: '542500', name: '����', py: 'ali', sx: 'al' },
            { code: '610900', name: '����', py: 'ankang', sx: 'ak' },
            { code: '340800', name: '����', py: 'anqing', sx: 'aq' },
            { code: '520400', name: '��˳', py: 'anshun', sx: 'as' },
            { code: '410500', name: '����', py: 'anyang', sx: 'ay' },
            { code: '210300', name: '��ɽ', py: 'anshan', sx: 'as' },
            { code: '820001', name: '����', py: 'aomen', sx: 'am' }, ]
        },
        {
            first: 'B', city: [{ code: '150800', name: '�����׶�', py: 'bayannaoer', sx: 'byne' },
            { code: '652800', name: '��������', py: 'bayinguoleng', sx: 'bygl' },
            { code: '511900', name: '����', py: 'bazhong', sx: 'bz' },
            { code: '220800', name: '�׳�', py: 'baicheng', sx: 'bc' },
            { code: '220600', name: '��ɽ', py: 'baishan', sx: 'bs' },
            { code: '620400', name: '����', py: 'baiyin', sx: 'by' },
            { code: '451000', name: '��ɫ', py: 'baise', sx: 'bs' },
            { code: '340300', name: '����', py: 'bangbu', sx: 'bb' },
            { code: '150200', name: '��ͷ', py: 'baotou', sx: 'bt' },
            { code: '610300', name: '����', py: 'baoji', sx: 'bj' },
            { code: '130600', name: '����', py: 'baoding', sx: 'bd' },
            { code: '530500', name: '��ɽ', py: 'baoshan', sx: 'bs' },
            { code: '450500', name: '����', py: 'beihai', sx: 'bh' },
            { code: '110100', name: '����', py: 'beijing', sx: 'bj' },
            { code: '210500', name: '��Ϫ', py: 'benxi', sx: 'bx' },
            { code: '520500', name: '�Ͻ�', py: 'bijie', sx: 'bj' },
            { code: '371600', name: '����', py: 'binzhou', sx: 'bz' },
            { code: '341600', name: '����', py: 'bozhou', sx: 'bz' },
            { code: '652700', name: '��������', py: 'boertala', sx: 'betl' }, ]
        },
        {
            first: 'C', city: [{ code: '130900', name: '����', py: 'cangzhou', sx: 'cz' },
            { code: '542100', name: '����', py: 'changdou', sx: 'cd' },
            { code: '652300', name: '����', py: 'changji', sx: 'cj' },
            { code: '430700', name: '����', py: 'changde', sx: 'cd' },
            { code: '320400', name: '����', py: 'changzhou', sx: 'cz' },
            { code: '220100', name: '����', py: 'changchun', sx: 'cc' },
            { code: '430100', name: '��ɳ', py: 'changsha', sx: 'cs' },
            { code: '140400', name: '����', py: 'changzhi', sx: 'cz' },
            { code: '211300', name: '����', py: 'chaoyang', sx: 'cy' },
            { code: '445100', name: '����', py: 'chaozhou', sx: 'cz' },
            { code: '431000', name: '����', py: 'chenzhou', sx: 'cz' },
            { code: '510100', name: '�ɶ�', py: 'chengdou', sx: 'cd' },
            { code: '130800', name: '�е�', py: 'chengde', sx: 'cd' },
            { code: '341700', name: '����', py: 'chizhou', sx: 'cz' },
            { code: '150400', name: '���', py: 'chifeng', sx: 'cf' },
            { code: '451400', name: '����', py: 'chongzuo', sx: 'cz' },
            { code: '341100', name: '����', py: 'chuzhou', sx: 'cz' },
            { code: '532300', name: '����', py: 'chuxiong', sx: 'cx' }, ]
        },
        {
            first: 'D', city: [{ code: '511700', name: '����', py: 'dazhou', sx: 'dz' },
            { code: '532900', name: '����', py: 'dali', sx: 'dl' },
            { code: '210200', name: '����', py: 'dalian', sx: 'dl' },
            { code: '230600', name: '����', py: 'daqing', sx: 'dq' },
            { code: '140200', name: '��ͬ', py: 'datong', sx: 'dt' },
            { code: '232700', name: '���˰���', py: 'daxinganling', sx: 'dxal' },
            { code: '210600', name: '����', py: 'dandong', sx: 'dd' },
            { code: '533100', name: '�º�', py: 'dehong', sx: 'dh' },
            { code: '510600', name: '����', py: 'deyang', sx: 'dy' },
            { code: '371400', name: '����', py: 'dezhou', sx: 'dz' },
            { code: '533400', name: '����', py: 'diqing', sx: 'dq' },
            { code: '621100', name: '����', py: 'dingxi', sx: 'dx' },
            { code: '441900', name: '��ݸ', py: 'dongguan', sx: 'dg' },
            { code: '370500', name: '��Ӫ', py: 'dongying', sx: 'dy' }, ]
        },
        {
            first: 'E', city: [{ code: '150600', name: '������˹', py: 'eerduosi', sx: 'eeds' },
            { code: '420700', name: '����', py: 'ezhou', sx: 'ez' },
            { code: '422800', name: '��ʩ', py: 'enshi', sx: 'es' }, ]
        },
        {
            first: 'F', city: [{ code: '450600', name: '���Ǹ�', py: 'fangchenggang', sx: 'fcg' },
            { code: '440600', name: '��ɽ', py: 'foshan', sx: 'fs' },
            { code: '350100', name: '����', py: 'fuzhou', sx: 'fz' },
            { code: '210400', name: '��˳', py: 'fushun', sx: 'fs' },
            { code: '361000', name: '����', py: 'fuzhou', sx: 'fz' },
            { code: '210900', name: '����', py: 'fuxin', sx: 'fx' },
            { code: '341200', name: '����', py: 'fuyang', sx: 'fy' }, ]
        },
        {
            first: 'G', city: [{ code: '623000', name: '����', py: 'gannan', sx: 'gn' },
            { code: '513300', name: '����', py: 'ganzi', sx: 'gz' },
            { code: '360700', name: '����', py: 'ganzhou', sx: 'gz' },
            { code: '640400', name: '��ԭ', py: 'guyuan', sx: 'gy' },
            { code: '511600', name: '�㰲', py: 'guangan', sx: 'ga' },
            { code: '510800', name: '��Ԫ', py: 'guangyuan', sx: 'gy' },
            { code: '440100', name: '����', py: 'guangzhou', sx: 'gz' },
            { code: '450800', name: '���', py: 'guigang', sx: 'gg' },
            { code: '520100', name: '����', py: 'guiyang', sx: 'gy' },
            { code: '450300', name: '����', py: 'guilin', sx: 'gl' },
            { code: '632600', name: '����', py: 'guoluo', sx: 'gl' }, ]
        },
        {
            first: 'H', city: [{ code: '230100', name: '������', py: 'haerbin', sx: 'heb' },
            { code: '652200', name: '����', py: 'hami', sx: 'hm' },
            { code: '632200', name: '����', py: 'haibei', sx: 'hb' },
            { code: '630200', name: '����', py: 'haidong', sx: 'hd' },
            { code: '460100', name: '����', py: 'haikou', sx: 'hk' },
            { code: '632500', name: '����', py: 'hainan', sx: 'hn' },
            { code: '632800', name: '����', py: 'haixi', sx: 'hx' },
            { code: '130400', name: '����', py: 'handan', sx: 'hd' },
            { code: '610700', name: '����', py: 'hanzhong', sx: 'hz' },
            { code: '330100', name: '����', py: 'hangzhou', sx: 'hz' },
            { code: '340100', name: '�Ϸ�', py: 'hefei', sx: 'hf' },
            { code: '653200', name: '����', py: 'hetian', sx: 'ht' },
            { code: '451200', name: '�ӳ�', py: 'hechi', sx: 'hc' },
            { code: '441600', name: '��Դ', py: 'heyuan', sx: 'hy' },
            { code: '371700', name: '����', py: 'heze', sx: 'hz' },
            { code: '451100', name: '����', py: 'hezhou', sx: 'hz' },
            { code: '410600', name: '�ױ�', py: 'hebi', sx: 'hb' },
            { code: '230400', name: '�׸�', py: 'hegang', sx: 'hg' },
            { code: '231100', name: '�ں�', py: 'heihe', sx: 'hh' },
            { code: '131100', name: '��ˮ', py: 'hengshui', sx: 'hs' },
            { code: '430400', name: '����', py: 'hengyang', sx: 'hy' },
            { code: '532500', name: '���', py: 'honghe', sx: 'hh' },
            { code: '150100', name: '���ͺ���', py: 'huhehaote', sx: 'hhht' },
            { code: '150700', name: '���ױ���', py: 'hulunbeier', sx: 'hlbe' },
            { code: '211400', name: '��«��', py: 'huludao', sx: 'hld' },
            { code: '330500', name: '����', py: 'huzhou', sx: 'hz' },
            { code: '431200', name: '����', py: 'huaihua', sx: 'hh' },
            { code: '320800', name: '����', py: 'huaian', sx: 'ha' },
            { code: '340600', name: '����', py: 'huaibei', sx: 'hb' },
            { code: '340400', name: '����', py: 'huainan', sx: 'hn' },
            { code: '421100', name: '�Ƹ�', py: 'huanggang', sx: 'hg' },
            { code: '632300', name: '����', py: 'huangnan', sx: 'hn' },
            { code: '341000', name: '��ɽ', py: 'huangshan', sx: 'hs' },
            { code: '420200', name: '��ʯ', py: 'huangshi', sx: 'hs' },
            { code: '441300', name: '����', py: 'huizhou', sx: 'hz' }, ]
        },
        {
            first: 'J', city: [{ code: '230300', name: '����', py: 'jixi', sx: 'jx' },
            { code: '360800', name: '����', py: 'jian', sx: 'ja' },
            { code: '220200', name: '����', py: 'jilin', sx: 'jl' },
            { code: '370100', name: '����', py: 'jinan', sx: 'jn' },
            { code: '370800', name: '����', py: 'jining', sx: 'jn' },
            { code: '230800', name: '��ľ˹', py: 'jiamusi', sx: 'jms' },
            { code: '330400', name: '����', py: 'jiaxing', sx: 'jx' },
            { code: '620200', name: '������', py: 'jiayuguan', sx: 'jyg' },
            { code: '440700', name: '����', py: 'jiangmen', sx: 'jm' },
            { code: '410800', name: '����', py: 'jiaozuo', sx: 'jz' },
            { code: '445200', name: '����', py: 'jieyang', sx: 'jy' },
            { code: '620300', name: '���', py: 'jinchang', sx: 'jc' },
            { code: '330700', name: '��', py: 'jinhua', sx: 'jh' },
            { code: '210700', name: '����', py: 'jinzhou', sx: 'jz' },
            { code: '140500', name: '����', py: 'jincheng', sx: 'jc' },
            { code: '140700', name: '����', py: 'jinzhong', sx: 'jz' },
            { code: '420800', name: '����', py: 'jingmen', sx: 'jm' },
            { code: '421000', name: '����', py: 'jingzhou', sx: 'jz' },
            { code: '360200', name: '������', py: 'jingdezhen', sx: 'jdz' },
            { code: '532801', name: '����', py: 'jinghong', sx: 'jh' },
            { code: '360400', name: '�Ž�', py: 'jiujiang', sx: 'jj' },
            { code: '620900', name: '��Ȫ', py: 'jiuquan', sx: 'jq' }, ]
        },
        {
            first: 'K', city: [{ code: '653100', name: '��ʲ', py: 'kashen', sx: 'ks' },
            { code: '410200', name: '����', py: 'kaifeng', sx: 'kf' },
            { code: '650200', name: '��������', py: 'kelamayi', sx: 'klmy' },
            { code: '653000', name: '��������', py: 'kezilesu', sx: 'kzls' },
            { code: '530100', name: '����', py: 'kunming', sx: 'km' }, ]
        },
        {
            first: 'L', city: [{ code: '540100', name: '����', py: 'lasa', sx: 'ls' },
            { code: '451300', name: '����', py: 'laibin', sx: 'lb' },
            { code: '371200', name: '����', py: 'laiwu', sx: 'lw' },
            { code: '620100', name: '����', py: 'lanzhou', sx: 'lz' },
            { code: '131000', name: '�ȷ�', py: 'langfang', sx: 'lf' },
            { code: '511100', name: '��ɽ', py: 'leshan', sx: 'ls' },
            { code: '530700', name: '����', py: 'lijiang', sx: 'lj' },
            { code: '331100', name: '��ˮ', py: 'lishui', sx: 'ls' },
            { code: '320700', name: '���Ƹ�', py: 'lianyungang', sx: 'lyg' },
            { code: '513400', name: '��ɽ', py: 'liangshan', sx: 'ls' },
            { code: '211000', name: '����', py: 'liaoyang', sx: 'ly' },
            { code: '220400', name: '��Դ', py: 'liaoyuan', sx: 'ly' },
            { code: '371500', name: '�ĳ�', py: 'liaocheng', sx: 'lc' },
            { code: '542600', name: '��֥', py: 'linzhi', sx: 'lz' },
            { code: '530900', name: '�ٲ�', py: 'lincang', sx: 'lc' },
            { code: '141000', name: '�ٷ�', py: 'linfen', sx: 'lf' },
            { code: '622900', name: '����', py: 'linxia', sx: 'lx' },
            { code: '371300', name: '����', py: 'linyi', sx: 'ly' },
            { code: '450200', name: '����', py: 'liuzhou', sx: 'lz' },
            { code: '341500', name: '����', py: 'liuan', sx: 'la' },
            { code: '520200', name: '����ˮ', py: 'liupanshui', sx: 'lps' },
            { code: '350800', name: '����', py: 'longyan', sx: 'ly' },
            { code: '621200', name: '¤��', py: 'longnan', sx: 'ln' },
            { code: '431300', name: '¦��', py: 'loudi', sx: 'ld' },
            { code: '510500', name: '����', py: 'luzhou', sx: 'lz' },
            { code: '410300', name: '����', py: 'luoyang', sx: 'ly' },
            { code: '411100', name: '���', py: 'luohe', sx: 'lh' },
            { code: '141100', name: '����', py: 'lu:liang', sx: 'll' }, ]
        },
        {
            first: 'M', city: [{ code: '340500', name: '��ɽ', py: 'maanshan', sx: 'mas' },
            { code: '440900', name: 'ï��', py: 'maoming', sx: 'mm' },
            { code: '511400', name: 'üɽ', py: 'meishan', sx: 'ms' },
            { code: '441400', name: '÷��', py: 'meizhou', sx: 'mz' },
            { code: '510700', name: '����', py: 'mianyang', sx: 'my' },
            { code: '231000', name: 'ĵ����', py: 'mudanjiang', sx: 'mdj' }, ]
        },
        {
            first: 'N', city: [{ code: '542400', name: '����', py: 'neiqu', sx: 'nq' },
            { code: '360100', name: '�ϲ�', py: 'nanchang', sx: 'nc' },
            { code: '511300', name: '�ϳ�', py: 'nanchong', sx: 'nc' },
            { code: '320100', name: '�Ͼ�', py: 'nanjing', sx: 'nj' },
            { code: '450100', name: '����', py: 'nanning', sx: 'nn' },
            { code: '350700', name: '��ƽ', py: 'nanping', sx: 'np' },
            { code: '320600', name: '��ͨ', py: 'nantong', sx: 'nt' },
            { code: '411300', name: '����', py: 'nanyang', sx: 'ny' },
            { code: '511000', name: '�ڽ�', py: 'neijiang', sx: 'nj' },
            { code: '330200', name: '����', py: 'ningbo', sx: 'nb' },
            { code: '350900', name: '����', py: 'ningde', sx: 'nd' },
            { code: '533300', name: 'ŭ��', py: 'nujiang', sx: 'nj' }, ]
        },
        {
            first: 'P', city: [{ code: '510400', name: '��֦��', py: 'panzhihua', sx: 'pzh' },
            { code: '211100', name: '�̽�', py: 'panjin', sx: 'pj' },
            { code: '410400', name: 'ƽ��ɽ', py: 'pingdingshanp', sx: 'ds' },
            { code: '620800', name: 'ƽ��', py: 'pingliang', sx: 'pl' },
            { code: '360300', name: 'Ƽ��', py: 'pingxiang', sx: 'px' },
            { code: '350300', name: '����', py: 'putian', sx: 'pt' },
            { code: '410900', name: '���', py: 'puyang', sx: 'py' },
            { code: '530800', name: '�ն�', py: 'puer', sx: 'pe' }, ]
        },
        {
            first: 'Q', city: [{ code: '230900', name: '��̨��', py: 'qitaihe', sx: 'qth' },
            { code: '230200', name: '�������', py: 'qiqihaer', sx: 'qqhe' },
            { code: '522600', name: 'ǭ����', py: 'qiandongnan', sx: 'qdn' },
            { code: '522700', name: 'ǭ��', py: 'qiannan', sx: 'qn' },
            { code: '522300', name: 'ǭ����', py: 'qianxinan', sx: 'qxn' },
            { code: '450700', name: '����', py: 'qinzhou', sx: 'qz' },
            { code: '130300', name: '�ػʵ�', py: 'qinhuangdao', sx: 'qhd' },
            { code: '370200', name: '�ൺ', py: 'qingdao', sx: 'qd' },
            { code: '441800', name: '��Զ', py: 'qingyuan', sx: 'qy' },
            { code: '621000', name: '����', py: 'qingyang', sx: 'qy' },
            { code: '330800', name: '����', py: 'quzhou', sx: 'qz' },
            { code: '530300', name: '����', py: 'qujing', sx: 'qj' },
            { code: '350500', name: 'Ȫ��', py: 'quanzhou', sx: 'qz' }, ]
        },
        {
            first: 'R', city: [{ code: '542300', name: '�տ���', py: 'rikaze', sx: 'rkz' },
            { code: '371100', name: '����', py: 'rizhao', sx: 'rz' }, ]
        },
        {
            first: 'S', city: [{ code: '411200', name: '����Ͽ', py: 'sanmenxia', sx: 'smx' },
            { code: '350400', name: '����', py: 'sanming', sx: 'sm' },
            { code: '460300', name: '��ɳ', py: 'sansha', sx: 'ss' },
            { code: '460200', name: '����', py: 'sanya', sx: 'sy' },
            { code: '542200', name: 'ɽ��', py: 'shannan', sx: 'sn' },
            { code: '440500', name: '��ͷ', py: 'shantou', sx: 'st' },
            { code: '441500', name: '��β', py: 'shanwei', sx: 'sw' },
            { code: '611000', name: '����', py: 'shangluo', sx: 'sl' },
            { code: '411400', name: '����', py: 'shangqiu', sx: 'sq' },
            { code: '310100', name: '�Ϻ�', py: 'shanghai', sx: 'sh' },
            { code: '361100', name: '����', py: 'shangrao', sx: 'sr' },
            { code: '440200', name: '�ع�', py: 'shaoguan', sx: 'sg' },
            { code: '430500', name: '����', py: 'shaoyang', sx: 'sy' },
            { code: '330600', name: '����', py: 'shaoxing', sx: 'sx' },
            { code: '440300', name: '����', py: 'shenzhen', sx: 'sz' },
            { code: '210100', name: '����', py: 'shenyang', sx: 'sy' },
            { code: '420300', name: 'ʮ��', py: 'shiyan', sx: 'sy' },
            { code: '130100', name: 'ʯ��ׯ', py: 'shijiazhuang', sx: 'sjz' },
            { code: '640200', name: 'ʯ��ɽ', py: 'shizuishan', sx: 'szs' },
            { code: '230500', name: '˫Ѽɽ', py: 'shuangyashan', sx: 'sys' },
            { code: '140600', name: '˷��', py: 'shuozhou', sx: 'sz' },
            { code: '220300', name: '��ƽ', py: 'siping', sx: 'sp' },
            { code: '220700', name: '��ԭ', py: 'songyuan', sx: 'sy' },
            { code: '320500', name: '����', py: 'suzhou', sx: 'sz' },
            { code: '231200', name: '�绯', py: 'suihua', sx: 'sh' },
            { code: '321300', name: '��Ǩ', py: 'suqian', sx: 'sq' },
            { code: '341300', name: '����', py: 'suzhou', sx: 'sz' },
            { code: '421300', name: '����', py: 'suizhou', sx: 'sz' },
            { code: '510900', name: '����', py: 'suining', sx: 'sn' }, ]
        },
        {
            first: 'T', city: [{ code: '654200', name: '����', py: 'tacheng', sx: 'tc' },
            { code: '710001', name: '̨��', py: 'taiwan', sx: 'tw' },
            { code: '331000', name: '̨��', py: 'taizhou', sx: 'tz' },
            { code: '140100', name: '̫ԭ', py: 'taiyuan', sx: 'ty' },
            { code: '370900', name: '̩��', py: 'taian', sx: 'ta' },
            { code: '321200', name: '̩��', py: 'taizhou', sx: 'tz' },
            { code: '130200', name: '��ɽ', py: 'tangshan', sx: 'ts' },
            { code: '120100', name: '���', py: 'tianjin', sx: 'tj' },
            { code: '620500', name: '��ˮ', py: 'tianshui', sx: 'ts' },
            { code: '211200', name: '����', py: 'tieling', sx: 'tl' },
            { code: '220500', name: 'ͨ��', py: 'tonghua', sx: 'th' },
            { code: '150500', name: 'ͨ��', py: 'tongliao', sx: 'tl' },
            { code: '610200', name: 'ͭ��', py: 'tongchuan', sx: 'tc' },
            { code: '340700', name: 'ͭ��', py: 'tongling', sx: 'tl' },
            { code: '520600', name: 'ͭ��', py: 'tongren', sx: 'tr' },
            { code: '652100', name: '��³��', py: 'tulufan', sx: 'tlf' }, ]
        },
        {
            first: 'W', city: [{ code: '371000', name: '����', py: 'weihai', sx: 'wh' },
            { code: '370700', name: 'Ϋ��', py: 'weifang', sx: 'wf' },
            { code: '610500', name: 'μ��', py: 'weinan', sx: 'wn' },
            { code: '330300', name: '����', py: 'wenzhou', sx: 'wz' },
            { code: '532600', name: '��ɽ', py: 'wenshan', sx: 'ws' },
            { code: '150300', name: '�ں�', py: 'wuhai', sx: 'wh' },
            { code: '150900', name: '�����첼', py: 'wulanchab', sx: 'uwlcb' },
            { code: '650100', name: '��³ľ��', py: 'wulumuqi', sx: 'wlmq' },
            { code: '320200', name: '����', py: 'wuxi', sx: 'wx' },
            { code: '340200', name: '�ߺ�', py: 'wuhu', sx: 'wh' },
            { code: '640300', name: '����', py: 'wuzhong', sx: 'wz' },
            { code: '450400', name: '����', py: 'wuzhou', sx: 'wz' },
            { code: '420100', name: '�人', py: 'wuhan', sx: 'wh' },
            { code: '620600', name: '����', py: 'wuwei', sx: 'ww' }, ]
        },
        {
            first: 'X', city: [{ code: '610100', name: '����', py: 'xian', sx: 'xa' },
            { code: '630100', name: '����', py: 'xining', sx: 'xn' },
            { code: '152500', name: '���ֹ���', py: 'xilinguole', sx: 'xlgl' },
            { code: '350200', name: '����', py: 'xiamen', sx: 'xm' },
            { code: '421200', name: '����', py: 'xianning', sx: 'xn' },
            { code: '610400', name: '����', py: 'xianyang', sx: 'xy' },
            { code: '810001', name: '���', py: 'xianggang', sx: 'xg' },
            { code: '430300', name: '��̶', py: 'xiangtan', sx: 'xt' },
            { code: '433100', name: '����', py: 'xiangxi', sx: 'xx' },
            { code: '420600', name: '����', py: 'xiangyang', sx: 'xy' },
            { code: '420900', name: 'Т��', py: 'xiaogan', sx: 'xg' },
            { code: '140900', name: '����', py: 'xinzhou', sx: 'xz' },
            { code: '410700', name: '����', py: 'xinxiang', sx: 'xx' },
            { code: '360500', name: '����', py: 'xinyu', sx: 'xy' },
            { code: '411500', name: '����', py: 'xinyang', sx: 'xy' },
            { code: '130500', name: '��̨', py: 'xingtai', sx: 'xt' },
            { code: '152200', name: '�˰�', py: 'xingan', sx: 'xa' },
            { code: '320300', name: '����', py: 'xuzhou', sx: 'xz' },
            { code: '411000', name: '���', py: 'xuchang', sx: 'xc' },
            { code: '341800', name: '����', py: 'xuancheng', sx: 'xc' }, ]
        },
        {
            first: 'Y', city: [{ code: '511800', name: '�Ű�', py: 'yaan', sx: 'ya' },
            { code: '370600', name: '��̨', py: 'yantai', sx: 'yt' },
            { code: '610600', name: '�Ӱ�', py: 'yanan', sx: 'ya' },
            { code: '222400', name: '�ӱ�', py: 'yanbian', sx: 'yb' },
            { code: '320900', name: '�γ�', py: 'yancheng', sx: 'yc' },
            { code: '321000', name: '����', py: 'yangzhou', sx: 'yz' },
            { code: '441700', name: '����', py: 'yangjiang', sx: 'yj' },
            { code: '140300', name: '��Ȫ', py: 'yangquan', sx: 'yq' },
            { code: '230700', name: '����', py: 'yichun', sx: 'yc' },
            { code: '654000', name: '����', py: 'yili', sx: 'yl' },
            { code: '511500', name: '�˱�', py: 'yibin', sx: 'yb' },
            { code: '420500', name: '�˲�', py: 'yichang', sx: 'yc' },
            { code: '360900', name: '�˴�', py: 'yichun', sx: 'yc' },
            { code: '430900', name: '����', py: 'yiyang', sx: 'yy' },
            { code: '640100', name: '����', py: 'yinchuan', sx: 'yc' },
            { code: '360600', name: 'ӥ̶', py: 'yingtan', sx: 'yt' },
            { code: '210800', name: 'Ӫ��', py: 'yingkou', sx: 'yk' },
            { code: '431100', name: '����', py: 'yongzhou', sx: 'yz' },
            { code: '610800', name: '����', py: 'yulin', sx: 'yl' },
            { code: '450900', name: '����', py: 'yulin', sx: 'yl' },
            { code: '632700', name: '����', py: 'yushu', sx: 'ys' },
            { code: '530400', name: '��Ϫ', py: 'yuxi', sx: 'yx' },
            { code: '430600', name: '����', py: 'yueyang', sx: 'yy' },
            { code: '445300', name: '�Ƹ�', py: 'yunfu', sx: 'yf' },
            { code: '140800', name: '�˳�', py: 'yuncheng', sx: 'yc' }, ]
        },
        {
            first: 'Z', city: [{ code: '370400', name: '��ׯ', py: 'zaozhuang', sx: 'zz' },
            { code: '440800', name: 'տ��', py: 'zhanjiang', sx: 'zj' },
            { code: '430800', name: '�żҽ�', py: 'zhangjiajie', sx: 'zjj' },
            { code: '130700', name: '�żҿ�', py: 'zhangjiakou', sx: 'zjk' },
            { code: '620700', name: '��Ҵ', py: 'zhangye', sx: 'zy' },
            { code: '350600', name: '����', py: 'zhangzhou', sx: 'zz' },
            { code: '530600', name: '��ͨ', py: 'zhaotong', sx: 'zt' },
            { code: '441200', name: '����', py: 'zhaoqing', sx: 'zq' },
            { code: '321100', name: '��', py: 'zhenjiang', sx: 'zj' },
            { code: '410100', name: '֣��', py: 'zhengzhou', sx: 'zz' },
            { code: '442000', name: '��ɽ', py: 'zhongshan', sx: 'zs' },
            { code: '640500', name: '����', py: 'zhongwei', sx: 'zw' },
            { code: '500100', name: '����', py: 'zhongqing', sx: 'zq' },
            { code: '330900', name: '��ɽ', py: 'zhoushan', sx: 'zs' },
            { code: '411600', name: '�ܿ�', py: 'zhoukou', sx: 'zk' },
            { code: '440400', name: '�麣', py: 'zhuhai', sx: 'zh' },
            { code: '430200', name: '����', py: 'zhuzhou', sx: 'zz' },
            { code: '411700', name: 'פ���', py: 'zhumadianz', sx: 'md' },
            { code: '512000', name: '����', py: 'ziyang', sx: 'zy' },
            { code: '370300', name: '�Ͳ�', py: 'zibo', sx: 'zb' },
            { code: '510300', name: '�Թ�', py: 'zigong', sx: 'zg' },
            { code: '520300', name: '����', py: 'zunyi', sx: 'zy' }, ]
        }],
        citysLength: 0,
        openSearchList: function (isOpen) {
            var newHeight = window.screen.height;
            if (this.el_search_wrap)
                newHeight -= this.el_search_wrap.offsetHeight;
            if (isOpen) {
                this.el_search_ul.style.height = newHeight + 'px';
                this.el_search_ul.style.display = 'block';

                this.el_city_wrap.style.display = 'none';
            } else {
                this.el_search_ul.style.display = 'none';

                this.el_city_wrap.style.height = newHeight + 'px';
                this.el_city_wrap.style.display = 'block';
            }
        },
        findCity: function (py) {
            if (py.length > 0) {
                var result = [];
                for (var i = 0; i < this.citysLength; i++) {
                    for (var j = 0, _len = this.cityData[i].city.length; j < _len; j++) {
                        var m = this.cityData[i].city[j];
                        if (m.name.indexOf(py) == 0 || m.py.indexOf(py.toLowerCase()) == 0 || m.sx.indexOf(py.toLowerCase()) == 0)
                            result.push(m);
                    }
                }
                this.addResultHtml(result);
            }
        },
        result_py:'',
        addResultHtml: function (data) {
            var result_str = '';
            if (data && data.length) {
                for (var i = 0, len = data.length; i < len; i++) {
                    result_str += '<li class="city_name" data-code="' + data[i].code + '">' + data[i].name + '</li>';
                }
            }
            this.el_search_ul.innerHTML = result_str;
        },
        insertHtml: function () {
            var search_str = '<header id="search_wrap"><p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAhFBMVEUAAABvb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb2/pz3N0AAAAK3RSTlMA8nYG0dT7yogN4cMj2DEQwLmafy3GspNpFOquom9gVE1CPBncqVo1RwsdhV/YeAAAAdtJREFUSMfll+uOgkAMhXcQEbkJooggd0Fd3v/9dhMZLpbDjDH7a/vHxMNHZ+ppG79eosr1QFWZoZoXpfx6K7KAtaO46o40Gq5bErEcfju2s6FLsEqLQj2I2EuLQyuW2bhdjEw6r33RQ3/vTup+k7qv4fMb7hpv+JqdEesMDymrsZCrvWAi2O4PTOp66ukUeIPr7oOKPhfZahaO+HVnVb2/0ZzacNWaP5jbydGc6AlsWGndA3eqnTVyJ1C0PZVSof8t3qD4vQvuN2FRXF5qHD68dGeiYAHOOjghikGqAe3rE4WJYQvaJBLDBw6jrqgX4BzCm66hJMZbQ5S6U74x7MFxoqAzDQbmnUE7tiQNiTzizWhGp4WAXbHBI9Dc7LE8WbUzsgCecSmXvVk54HIMf2Pcs1ave1swHAdn4xnXGvn0tfXAwr4b7WUz67PfTtpk3QEbVeO9ZMRKmjXpaUNWLUhdtuLAK+cuRbuALtgnuS1XikbTPYwk6CNqn23yWmFVT5Sa5EbhKMH6eXumxonzHGE2yY2jOhRl4VSjaXCd0iA3iN16Qm9kmL/K/SZtT+l/k/sjeqsOKNysmJ7k1sQAyA1gYW68BuRzaxYR5XOXRJKhj+Bfi1zsGXOd388f/Xy8Q9tviYcAAAAASUVORK5CYII=" />';
            search_str += '<input id="txt_city" maxlength="10" placeholder="���������������ĸ��ѯ" type="text" /></p>';
            search_str += '</header><ul id="search_ul" class="page"></ul>';
            var city_str = '';
            var letter_str = '';
            this.citysLength = this.cityData.length;
            for (var i = 0; i < this.citysLength; i++) {
                letter_str += '<li class="letter_li">' + this.cityData[i].first + '</li>';
                city_str += '<ul class="city_list"><li id="letter_' + this.cityData[i].first + '" class="city_letter">' + this.cityData[i].first + '</li>';
                for (var j = 0, _len = this.cityData[i].city.length; j < _len; j++) {
                    var m = this.cityData[i].city[j];
                    city_str += '<li class="city_name" data-code="' + m.code + '">' + m.name + '</li>';
                }
                city_str += '</ul>';
            }
            if (letter_str)
                letter_str = '<ul id="letter_ul">' + letter_str + '</ul>';
            if (city_str)
                city_str = '<main id="city_wrap" class="page">' + city_str + letter_str + '</main>';
            this.el_content.innerHTML = search_str + city_str;
        },
        bindEvent: function () {
            var $this = this;
            addEvent(this.el_content, 'click', function (e) {
                var target = e.target || e.srcElement || event.srcElement || event.target;
                if (target) {
                    if (target.className === "letter_li") {
                        var newY = document.getElementById('letter_' + target.innerHTML).offsetTop;
                        if ($this.el_search_wrap)
                            newY -= $this.el_search_wrap.offsetHeight;
                        $this.el_city_wrap.scrollTop=newY;
                    } else if (target.className === "city_name") {
                        var result = { code: target.getAttribute('data-code'), name: target.innerHTML };
                        $this.el_txt_city.blur();
                        $this.callback && $this.callback(result);
                    }
                }
            });
            addEvent(this.el_txt_city, 'keydown keyup ofcus blur', function () {
                var py = this.value;
                if (py != $this.result_py) {
                    $this.result_py = py;
                    if (py) {
                        $this.openSearchList(true);
                        $this.findCity(py);
                    }
                    else
                        $this.openSearchList(false);
                }
                //֧��keydown��ȡ����ʱ��
                //if ($this.setTime) {
                //    clearInterval($this.setTime), $this.setTime = null;
                //}
            });
            ////��ʱ����ȡ���(��׿���������뷨��֧��keydown�ȼ���)
            //this.setTime = setInterval(function () {
            //    var py = $this.el_txt_city.value;
            //    if (py != $this.result_py) {
            //        $this.result_py = py;
            //        if (py) {
            //            $this.openSearchList(true);
            //            $this.findCity(py);
            //        }
            //        else
            //            $this.openSearchList(false);
            //    }
            //}, 500);
        },
        callback: null,
        init: function (obj,callback) {
            if (obj)
                this.el_content = obj.length ? obj[0] : obj;
            if (callback)
                this.callback = callback;
            if (this.el_content) {
                this.insertHtml();
                this.el_search_wrap = document.getElementById('search_wrap');
                this.el_txt_city = document.getElementById('txt_city');
                this.el_search_ul = document.getElementById('search_ul');
                this.el_city_wrap = document.getElementById('city_wrap');
                this.el_letter_ul = document.getElementById('letter_ul');
                this.bindEvent();
            }
            this.openSearchList(false);
        }
    };
    window.cityList = cityList;
})();