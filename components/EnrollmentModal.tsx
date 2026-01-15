import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    // Form State
    const [formData, setFormData] = useState({
        full_name: '',
        dob: '',
        sex: '',
        cpf: '',
        phone: '',
        email: '',
        address: '',
        profession: '',
        emergency_contact: '',
        principal_objective: '',
        other_objective: '',
        results_timeframe: '',
        days_per_week: '',
        modalities: [] as string[],
        fighting_styles: [] as string[],
        other_fighting_style: '',
        experienced: null as boolean | null,
        experience_details: '',
        period: '',
        training_preference: '',
        practiced_before: null as boolean | null,
        time_without_training: 'Nunca treinei',
        has_health_condition: null as boolean | null,
        health_condition_details: '',
        health_history: [] as string[],
        other_health_history: '',
        recent_surgery: null as boolean | null,
        surgery_details: '',
        effort_pain: null as boolean | null,
        pain_location: '',
        continuous_medication: null as boolean | null,
        medication_details: '',
        medical_release: '',
        signature: '',
        observations: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checkbox = e.target as HTMLInputElement;
            const currentList = formData[name as keyof typeof formData] as string[];
            setFormData(prev => ({
                ...prev,
                [name]: checkbox.checked
                    ? [...currentList, value]
                    : currentList.filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleRadioChange = (name: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors: string[] = [];

        // Basic Required Fields
        if (!formData.full_name) newErrors.push("Nome Completo é obrigatório.");
        if (!formData.dob) newErrors.push("Data de Nascimento é obrigatória.");
        if (!formData.sex) newErrors.push("Sexo é obrigatório.");
        if (!formData.cpf) newErrors.push("CPF é obrigatório.");
        if (!formData.phone) newErrors.push("Telefone / WhatsApp é obrigatório.");
        if (!formData.email) newErrors.push("E-mail é obrigatório.");
        if (!formData.address) newErrors.push("Endereço Completo é obrigatório.");


        // Objectives
        if (!formData.principal_objective) newErrors.push("Principal objetivo é obrigatório.");
        if (!formData.results_timeframe) newErrors.push("Tempo para resultados é obrigatório.");
        if (!formData.days_per_week) newErrors.push("Frequência semanal é obrigatória.");

        // Modalidades
        if (formData.modalities.length === 0) newErrors.push("Pelo menos uma modalidade deve ser selecionada.");

        // Routine
        if (!formData.period) newErrors.push("Período preferido é obrigatório.");
        if (!formData.training_preference) newErrors.push("Preferência de treino é obrigatória.");

        // Release
        if (!formData.medical_release) newErrors.push("Liberação médica deve ser informada.");
        if (!formData.signature) newErrors.push("Assinatura do aluno é obrigatória.");

        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            const modalElement = document.querySelector('.relative.bg-white');
            if (modalElement) modalElement.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from('enrollments')
                .insert([formData]);

            if (error) throw error;

            alert("📚 Matrícula efetuada com sucesso! Bem-vindo ao Neo Brutal.");
            onClose();
        } catch (error: any) {
            console.error('Error submitting enrollment:', error);
            alert("Erro ao enviar matrícula. Verifique o console ou tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white border-4 border-black shadow-neo w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-500 text-white p-2 border-2 border-black shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all rounded-lg z-10"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="p-6 md:p-8">
                    <header className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-2">
                            Formulário de Matrícula
                        </h2>
                        <p className="text-xl font-bold bg-black text-white inline-block px-4 py-1 transform -rotate-1 rounded-sm">
                            ACADEMIA NEO BRUTAL
                        </p>
                    </header>

                    {errors.length > 0 && (
                        <div className="mb-8 border-4 border-red-600 p-4 bg-red-50 rounded-xl animate-pulse shadow-neo-sm">
                            <h4 className="text-red-600 font-black uppercase mb-2">Por favor, corrija os seguintes erros:</h4>
                            <ul className="list-disc list-inside text-red-700 font-bold">
                                {errors.map((err, i) => <li key={i}>{err}</li>)}
                            </ul>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* 1. Dados Pessoais */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-yellow text-black w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">1</span>
                                Dados Pessoais
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block font-bold uppercase mb-1">Nome Completo</label>
                                    <input
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Data de Nascimento</label>
                                    <input
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleInputChange}
                                        type="date"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">CPF</label>
                                    <input
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="000.000.000-00"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="block font-bold uppercase mb-2">Sexo</label>
                                    <div className="flex gap-4 flex-wrap">
                                        {['Masculino', 'Feminino', 'Prefiro não informar'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="sex"
                                                    checked={formData.sex === opt}
                                                    onChange={() => handleRadioChange('sex', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Telefone / WhatsApp</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        type="tel"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">E-mail</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="block font-bold uppercase mb-1">Endereço Completo</label>
                                    <input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Profissão</label>
                                    <input
                                        name="profession"
                                        value={formData.profession}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Contato de Emergência</label>
                                    <input
                                        name="emergency_contact"
                                        value={formData.emergency_contact}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Nome e Telefone"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 2. Objetivos */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-pink text-black w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">2</span>
                                Objetivos na Academia
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-bold uppercase mb-2">Qual é o seu principal objetivo?</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {['Emagrecimento', 'Ganho de massa muscular', 'Condicionamento físico', 'Saúde e qualidade de vida', 'Redução do estresse', 'Reabilitação / prevenção'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="principal_objective"
                                                    checked={formData.principal_objective === opt}
                                                    onChange={() => handleRadioChange('principal_objective', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                        <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="principal_objective"
                                                checked={formData.principal_objective === 'Outro'}
                                                onChange={() => handleRadioChange('principal_objective', 'Outro')}
                                                className="w-5 h-5 accent-black"
                                            />
                                            <input
                                                name="other_objective"
                                                value={formData.other_objective}
                                                onChange={handleInputChange}
                                                type="text"
                                                placeholder="Outro: ___________"
                                                className="border-b-2 border-black bg-transparent focus:outline-none w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bold uppercase mb-2">Em quanto tempo espera ver resultados?</label>
                                        <div className="flex flex-col gap-2">
                                            {['Até 30 dias', '2 a 3 meses', '6 meses ou mais'].map(opt => (
                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="results_timeframe"
                                                        checked={formData.results_timeframe === opt}
                                                        onChange={() => handleRadioChange('results_timeframe', opt)}
                                                        className="w-5 h-5 accent-black"
                                                    />
                                                    <span className="font-medium">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-bold uppercase mb-2">Dias por semana?</label>
                                        <div className="flex flex-col gap-2">
                                            {['1–2 dias', '3–4 dias', '5 ou mais dias'].map(opt => (
                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="days_per_week"
                                                        checked={formData.days_per_week === opt}
                                                        onChange={() => handleRadioChange('days_per_week', opt)}
                                                        className="w-5 h-5 accent-black"
                                                    />
                                                    <span className="font-medium">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Modalidades */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-yellow text-black w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">3</span>
                                Modalidades de Interesse
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-bold uppercase mb-2">Modalidades de interesse:</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Musculação', 'CrossFit', 'HIIT', 'Lutas', 'Yoga'].map(opt => (
                                            <label key={opt} className={`flex items-center gap-2 cursor-pointer bg-white border-2 border-black px-3 py-2 rounded shadow-neo-sm hover:-translate-y-0.5 hover:shadow-black transition-all ${formData.modalities.includes(opt) ? 'bg-accent-yellow' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    name="modalities"
                                                    value={opt}
                                                    checked={formData.modalities.includes(opt)}
                                                    onChange={handleInputChange}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-bold uppercase">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-4 border-2 border-black rounded">
                                    <label className="block font-bold uppercase mb-2 text-sm">Se marcou Lutas, qual(is)?</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Boxe', 'Muay Thai', 'Jiu-Jitsu'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="fighting_styles"
                                                    value={opt}
                                                    checked={formData.fighting_styles.includes(opt)}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Rotina */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-pink text-black w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">4</span>
                                Rotina e Disponibilidade
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-bold uppercase mb-2">Período preferido:</label>
                                    <div className="flex gap-4">
                                        {['Manhã', 'Tarde', 'Noite'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="period"
                                                    checked={formData.period === opt}
                                                    onChange={() => handleRadioChange('period', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-2">Preferência de treino:</label>
                                    <div className="flex flex-col gap-2">
                                        {['Treinos individuais', 'Aulas em grupo', 'Ambos'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="training_preference"
                                                    checked={formData.training_preference === opt}
                                                    onChange={() => handleRadioChange('training_preference', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 5. Histórico */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-yellow text-black w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">5</span>
                                Histórico
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block font-bold uppercase mb-2">Pratica ou já praticou atividade física?</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="practiced_before"
                                                checked={formData.practiced_before === true}
                                                onChange={() => handleRadioChange('practiced_before', true)}
                                                className="w-5 h-5 accent-black"
                                            />
                                            <span className="font-medium">Sim</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="practiced_before"
                                                checked={formData.practiced_before === false}
                                                onChange={() => handleRadioChange('practiced_before', false)}
                                                className="w-5 h-5 accent-black"
                                            />
                                            <span className="font-medium">Não</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-2">Tempo sem treinar:</label>
                                    <select
                                        name="time_without_training"
                                        value={formData.time_without_training}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all bg-white"
                                    >
                                        <option>Menos de 3 meses</option>
                                        <option>3 a 6 meses</option>
                                        <option>Mais de 6 meses</option>
                                        <option>Nunca treinei</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* 6. Saúde */}
                        <section className="border-4 border-black p-6 rounded-xl bg-red-50 shadow-neo-sm border-l-8 border-l-red-600">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3 text-red-600">
                                <span className="bg-black text-white w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">6</span>
                                Saúde Geral (Importante)
                            </h3>

                            <div className="space-y-4">
                                <div className="p-4 bg-white border-2 border-black rounded">
                                    <label className="block font-bold uppercase mb-2">Já teve ou tem:</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {['Problemas cardíacos', 'Pressão alta/baixa', 'Diabetes', 'Problemas respiratórios', 'Problemas na coluna', 'Hérnia de disco'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="health_history"
                                                    value={opt}
                                                    checked={formData.health_history.includes(opt)}
                                                    onChange={handleInputChange}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Passou por cirurgia (últimos 12 meses)?</label>
                                    <div className="flex gap-4 mb-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" checked={formData.recent_surgery === true} onChange={() => handleRadioChange('recent_surgery', true)} className="w-5 h-5 accent-black" />
                                            <span>Sim</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" checked={formData.recent_surgery === false} onChange={() => handleRadioChange('recent_surgery', false)} className="w-5 h-5 accent-black" />
                                            <span>Não</span>
                                        </label>
                                    </div>
                                    {formData.recent_surgery && (
                                        <input
                                            name="surgery_details"
                                            value={formData.surgery_details}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Qual?"
                                            className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Uso de medicamento contínuo?</label>
                                    <div className="flex gap-4 mb-2">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" checked={formData.continuous_medication === true} onChange={() => handleRadioChange('continuous_medication', true)} className="w-5 h-5 accent-black" />
                                            <span>Sim</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" checked={formData.continuous_medication === false} onChange={() => handleRadioChange('continuous_medication', false)} className="w-5 h-5 accent-black" />
                                            <span>Não</span>
                                        </label>
                                    </div>
                                    {formData.continuous_medication && (
                                        <input
                                            name="medication_details"
                                            value={formData.medication_details}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Qual(is)?"
                                            className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all"
                                        />
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* 7. Liberação */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-black text-white w-8 h-8 flex items-center justify-center border-2 border-black rounded text-lg">7</span>
                                Liberação e Responsabilidade
                            </h3>

                            <div className="space-y-4">
                                <div className="flex flex-col gap-2">
                                    {['Possuo liberação médica', 'Não possuo, mas me responsabilizo'].map(opt => (
                                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="medical_release"
                                                checked={formData.medical_release === opt}
                                                onChange={() => handleRadioChange('medical_release', opt)}
                                                className="w-5 h-5 accent-black"
                                            />
                                            <span className="font-medium">{opt}</span>
                                        </label>
                                    ))}
                                </div>

                                <div className="border-t-2 border-black pt-4 mt-4">
                                    <p className="font-bold text-sm mb-4">Declaro que as informações acima são verdadeiras e estou ciente de que devo informar a academia sobre qualquer alteração no meu estado de saúde.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-bold uppercase mb-1">Assinatura do Aluno</label>
                                            <input
                                                name="signature"
                                                value={formData.signature}
                                                onChange={handleInputChange}
                                                type="text"
                                                className="w-full border-b-2 border-black bg-transparent p-2 focus:outline-none font-script text-xl"
                                                placeholder="Digite seu nome completo"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-bold uppercase mb-1">Data</label>
                                            <input type="date" className="w-full border-b-2 border-black bg-transparent p-2 focus:outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 8. Obs */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-2xl font-black uppercase mb-4">8. Observações</h3>
                            <textarea
                                name="observations"
                                value={formData.observations}
                                onChange={handleInputChange}
                                className="w-full border-2 border-black p-3 rounded font-medium h-24 focus:outline-none focus:shadow-neo-sm transition-all"
                                placeholder="Alguma observação importante?"
                            ></textarea>
                        </section>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-primary text-white font-black text-xl uppercase px-8 py-4 border-4 border-black shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-xl w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Enviando...' : 'Confirmar Matrícula'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnrollmentModal;
