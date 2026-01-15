import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface VisitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    // Form State
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        visit_date: '',
        visit_period: '',
        is_first_visit: null as boolean | null,
        interest_modality: '',
        referral_source: '',
        other_referral: '',
        confirmation_method: '',
        observations: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (name: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors: string[] = [];

        if (!formData.full_name) newErrors.push("Nome completo é obrigatório.");
        if (!formData.phone) newErrors.push("Telefone / WhatsApp é obrigatório.");
        if (!formData.visit_date) newErrors.push("Data da visita é obrigatória.");
        if (!formData.visit_period) newErrors.push("Período da visita é obrigatório.");
        if (formData.is_first_visit === null) newErrors.push("Informe se é sua primeira visita.");
        if (!formData.interest_modality) newErrors.push("Selecione uma modalidade de interesse.");
        if (!formData.referral_source) newErrors.push("Informe como nos conheceu.");
        if (!formData.confirmation_method) newErrors.push("Selecione o método de confirmação preferido.");

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
                .from('visits')
                .insert([formData]);

            if (error) throw error;

            alert("✅ Visita agendada com sucesso! Nossa equipe entrará em contato em breve.");
            onClose();
        } catch (error: any) {
            console.error('Error scheduling visit:', error);
            alert("Erro ao agendar visita. Verifique o console ou tente novamente.");
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
            <div className="relative bg-white border-4 border-black shadow-neo w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-500 text-white p-2 border-2 border-black shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all rounded-lg z-10"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="p-6 md:p-8">
                    <header className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-2 leading-none">
                            Agendar Visita
                        </h2>
                        <p className="text-lg font-bold bg-black text-white inline-block px-4 py-1 transform rotate-1 rounded-sm">
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

                    <form onSubmit={handleSubmit} className="space-y-8 text-black">
                        {/* 1. Dados do Visitante */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-yellow text-black w-7 h-7 flex items-center justify-center border-2 border-black rounded text-sm">1</span>
                                Dados do Visitante
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block font-bold uppercase mb-1">Nome Completo</label>
                                    <input
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Telefone / WhatsApp</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        type="tel"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">E-mail (opcional)</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all bg-white"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 2. Visita */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-pink text-black w-7 h-7 flex items-center justify-center border-2 border-black rounded text-sm">2</span>
                                Visita
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-bold uppercase mb-1">Qual dia você gostaria de visitar?</label>
                                    <input
                                        name="visit_date"
                                        value={formData.visit_date}
                                        onChange={handleInputChange}
                                        type="date"
                                        className="w-full border-2 border-black p-3 rounded font-medium focus:outline-none focus:shadow-neo-sm transition-all bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-2">Qual horário prefere?</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Manhã', 'Tarde', 'Noite'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="visit_period"
                                                    checked={formData.visit_period === opt}
                                                    onChange={() => handleRadioChange('visit_period', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-2">Esta será sua primeira visita?</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={formData.is_first_visit === true}
                                                onChange={() => handleRadioChange('is_first_visit', true)}
                                                className="w-5 h-5 accent-black"
                                            />
                                            <span className="font-medium">Sim</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={formData.is_first_visit === false}
                                                onChange={() => handleRadioChange('is_first_visit', false)}
                                                className="w-5 h-5 accent-black"
                                            />
                                            <span className="font-medium">Não</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Interesse na Academia */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-accent-yellow text-black w-7 h-7 flex items-center justify-center border-2 border-black rounded text-sm">3</span>
                                Interesse na Academia
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-bold uppercase mb-2">Qual modalidade mais chamou sua atenção?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {['Musculação', 'CrossFit', 'HIIT', 'Lutas', 'Yoga'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="interest_modality"
                                                    checked={formData.interest_modality === opt}
                                                    onChange={() => handleRadioChange('interest_modality', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-2">Como conheceu a academia?</label>
                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        {['Instagram', 'Google', 'Indicação', 'Passando em frente'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="referral_source"
                                                    checked={formData.referral_source === opt}
                                                    onChange={() => handleRadioChange('referral_source', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="referral_source"
                                            checked={formData.referral_source === 'Outro'}
                                            onChange={() => handleRadioChange('referral_source', 'Outro')}
                                            className="w-5 h-5 accent-black"
                                        />
                                        <input
                                            name="other_referral"
                                            value={formData.other_referral}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Outro: ___________"
                                            className="border-b-2 border-black bg-transparent focus:outline-none w-full font-medium"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. Confirmação */}
                        <section className="border-4 border-black p-6 rounded-xl bg-gray-50 shadow-neo-sm">
                            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="bg-black text-white w-7 h-7 flex items-center justify-center border-2 border-black rounded text-sm">4</span>
                                Confirmação
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-bold uppercase mb-2">Prefere receber confirmação por:</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['WhatsApp', 'Ligação', 'E-mail'].map(opt => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="confirmation_method"
                                                    checked={formData.confirmation_method === opt}
                                                    onChange={() => handleRadioChange('confirmation_method', opt)}
                                                    className="w-5 h-5 accent-black"
                                                />
                                                <span className="font-medium">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold uppercase mb-1">Alguma observação? (opcional)</label>
                                    <textarea
                                        name="observations"
                                        value={formData.observations}
                                        onChange={handleInputChange}
                                        className="w-full border-2 border-black p-3 rounded font-medium h-24 focus:outline-none focus:shadow-neo-sm transition-all bg-white"
                                        placeholder="Ex: Gostaria de ver o treino de Muay Thai..."
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        <div className="bg-primary text-white p-4 rounded-xl border-4 border-black shadow-neo-sm">
                            <p className="font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined">info</span>
                                Após o envio, nossa equipe entrará em contato para confirmar sua visita.
                            </p>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-accent-yellow text-black font-black text-xl uppercase px-8 py-4 border-4 border-black shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-xl w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Agendando...' : 'Confirmar Visita'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default VisitModal;
